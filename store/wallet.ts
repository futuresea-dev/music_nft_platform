import { getSigningCosmwasmClientOptions } from "@bitsongjs/telescope";
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { EncodeObject, coins } from "@cosmjs/proto-signing";
import { GasPrice, defaultRegistryTypes } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";
import { Dec, IntPretty } from "@keplr-wallet/unit";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { acceptHMRUpdate } from "pinia";
import { SessionType } from "~~/types";
import { mainnetConfig, testnetConfig } from "~~/types/network";

export interface WalletState {
  loading: boolean;
  name?: string;
  address: string | undefined;
  isLedger: boolean;
  session?: SessionType;
  token?: string;
}

export const useWalletStore = defineStore("wallet", {
  state: (): WalletState => ({
    name: undefined,
    address: undefined,
    isLedger: false,
    loading: false,
    session: undefined,
    token: undefined,
  }),
  getters: {
    chainInfo(): ChainInfo {
      return import.meta.env.NUXT_PUBLIC_NETWORK === "mainnet"
        ? mainnetConfig
        : testnetConfig;
    },
    isLoggedIn(): boolean {
      return this.address !== undefined && this.token !== undefined;
    },
    getToken(): string | undefined {
      return this.token;
    },
  },
  actions: {
    async connect(sessionType: SessionType = SessionType.KEPLR) {
      try {
        this.loading = true;

        switch (sessionType) {
          case SessionType.KEPLR:
            this.session = SessionType.KEPLR;
            return await this.setupKeplr();
          case SessionType.LEAPWALLET:
            this.session = SessionType.LEAPWALLET;
            return await this.setupLeapWallet();
          case SessionType.COSMOSTATION:
            this.session = SessionType.COSMOSTATION;
            return await this.setupCosmostation();
        }
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },
    disconnect() {
      this.name = undefined;
      this.address = undefined;
      this.isLedger = false;
      this.session = undefined;
      this.token = undefined;
      this.loading = false;
    },
    async getOfflineSigner() {
      if (this.session === undefined) {
        throw new Error("Session not found");
      }

      if (
        this.session !== SessionType.KEPLR &&
        this.session !== SessionType.LEAPWALLET &&
        this.session !== SessionType.COSMOSTATION
      ) {
        throw new Error("Session type not supported");
      }

      switch (this.session) {
        case SessionType.KEPLR:
          return await window?.keplr?.getOfflineSigner(this.chainInfo.chainId);
        case SessionType.LEAPWALLET:
          return await window?.leap?.getOfflineSigner(this.chainInfo.chainId);
        case SessionType.COSMOSTATION:
          return await window.cosmostation?.providers.keplr.getOfflineSigner(
            this.chainInfo.chainId
          );
      }
    },
    async getClient() {
      try {
        const { registry, aminoTypes } = getSigningCosmwasmClientOptions({
          defaultTypes: defaultRegistryTypes,
        });

        const offlineSigner = await this.getOfflineSigner();

        return await SigningCosmWasmClient.connectWithSigner(
          this.chainInfo.rpc,
          offlineSigner!,
          {
            registry,
            aminoTypes,
            prefix: this.chainInfo.bech32Config.bech32PrefixAccAddr,
            gasPrice: GasPrice.fromString("1ubtsg"),
          }
        );
      } catch (error) {
        throw error;
      }
    },
    async getQueryClient() {
      try {
        return await CosmWasmClient.connect(this.chainInfo.rpc);
      } catch (error) {
        throw error;
      }
    },
    async signArbitrary(data: string) {
      try {
        switch (this.session) {
          case SessionType.KEPLR:
            return await window?.keplr?.signArbitrary(
              this.chainInfo.chainId,
              this.address!,
              data
            );
          case SessionType.LEAPWALLET:
            return await window?.leap?.signArbitrary(
              this.chainInfo.chainId,
              this.address!,
              data
            );
          case SessionType.COSMOSTATION:
            return await window.cosmostation?.providers.keplr?.signArbitrary(
              this.chainInfo.chainId,
              this.address!,
              data
            );
        }
      } catch (error) {
        throw error;
      }
    },
    async generateToken() {
      try {
        const payload = {
          domain: "sinfonia.zone",
          expire_at: Math.round(Date.now() / 1000) + 3600, // seconds
        };
        const signedPayload = await this.signArbitrary(JSON.stringify(payload));

        this.token = window.btoa(
          JSON.stringify({
            signer: this.address,
            payload,
            ...signedPayload,
          })
        );
      } catch (error) {
        throw error;
      }
    },
    async signAndBroadcast(msgs: EncodeObject[]) {
      if (!this.isLoggedIn) {
        throw new Error("Please connect your wallet");
      }

      try {
        const client = await this.getClient();

        const gasEstimated = await client.simulate(this.address!, msgs, "");
        const fees = {
          amount: coins(1, "ubtsg"),
          gas: new IntPretty(new Dec(gasEstimated).mul(new Dec(1.3)))
            .maxDecimals(0)
            .locale(false)
            .toString(),
        };

        const txRaw = await client.sign(this.address!, msgs, fees, "");
        const txBytes = TxRaw.encode(txRaw).finish();

        //this.status = WalletStatus.Broadcasting;
        const result = await client.broadcastTx(txBytes);

        if (result.code === 0) {
          //this.txHash = result.transactionHash;
          //this.status = WalletStatus.Success;
        }

        return result;
      } catch (err: unknown) {
        //this.status = WalletStatus.Error;

        if (err instanceof Error) {
          //this.errorMessage = err.message;
        } else {
          //this.errorMessage = "Unknown error";
        }

        throw err;
      }
    },
    async setupKeplr() {
      if (!window.keplr) {
        throw new Error("Please install keplr extension");
      }

      if (!window.keplr.experimentalSuggestChain) {
        throw new Error("Please use the recent version of keplr extension");
      }

      await window.keplr.experimentalSuggestChain(this.chainInfo);
      await window.keplr.enable(this.chainInfo.chainId);
      const key = await window.keplr.getKey(this.chainInfo.chainId);

      this.name = key.name;
      this.address = key.bech32Address;
      this.isLedger = key.isNanoLedger;

      window.addEventListener("keplr_keystorechange", () => {
        console.log("keplr_keystorechange");
      });
    },
    async setupLeapWallet() {
      if (!window.leap) {
        throw new Error("Please install leap wallet extension");
      }

      if (!window.leap.experimentalSuggestChain) {
        throw new Error("Please use the recent version of leap extension");
      }

      await window.leap.experimentalSuggestChain(this.chainInfo);
      await window.leap.enable(this.chainInfo.chainId);
      const key = await window.leap.getKey(this.chainInfo.chainId);

      this.name = key.name;
      this.address = key.bech32Address;
      this.isLedger = key.isNanoLedger;

      window.addEventListener("leap_keystorechange", () => {
        console.log("leap_keystorechange");
      });
    },
    async setupCosmostation() {
      if (!window.cosmostation) {
        throw new Error("Please install cosmostation extension");
      }

      if (!window.cosmostation.providers.keplr.experimentalSuggestChain) {
        throw new Error("Please use the recent version of leap extension");
      }

      await window.cosmostation.providers.keplr.experimentalSuggestChain(
        this.chainInfo
      );
      await window.cosmostation.providers.keplr.enable(this.chainInfo.chainId);
      const key = await window.cosmostation.providers.keplr.getKey(
        this.chainInfo.chainId
      );

      this.name = key.name;
      this.address = key.bech32Address;
      this.isLedger = key.isNanoLedger;

      window.cosmostation.cosmos.on("accountChanged", () =>
        console.log("cosmostation_keystorechange")
      );
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWalletStore, import.meta.hot));
}

export default useWalletStore;
