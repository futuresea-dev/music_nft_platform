// based on keplr suggest chain
// https://docs.keplr.app/api/suggest-chain.html

import {
  AppCurrency,
  Bech32Config,
  BIP44,
  Currency,
  FeeCurrency,
} from "@keplr-wallet/types";

export interface ChainInfo {
  readonly rpc: string;
  readonly rest: string;
  readonly chainId: string;
  readonly chainName: string;
  /**
   * This indicates the type of coin that can be used for stake.
   * You can get actual currency information from Currencies.
   */
  readonly stakeCurrency: Currency;
  readonly walletUrlForStaking?: string;
  readonly bip44: {
    coinType: number;
  };
  readonly alternativeBIP44s?: BIP44[];
  readonly bech32Config: Bech32Config;

  readonly currencies: AppCurrency[];
  /**
   * This indicates which coin or token can be used for fee to send transaction.
   * You can get actual currency information from Currencies.
   */
  readonly feeCurrencies: FeeCurrency[];

  /**
   * Indicate the features supported by this chain. Ex) cosmwasm, secretwasm ...
   */
  readonly features?: string[];

  /**
   * Indicate the chain is testnet or not.
   */
  readonly isTestnet: boolean;
}

export const mainnetConfig: ChainInfo = {
  rpc: "https://rpc.explorebitsong.com",
  rest: "https://lcd.explorebitsong.com",
  chainId: "bitsong-2b",
  chainName: "BitSong",
  stakeCurrency: {
    coinDenom: "BTSG",
    coinMinimalDenom: "ubtsg",
    coinDecimals: 6,
    coinGeckoId: "bitsong",
  },
  walletUrlForStaking: "https://wallet.bitsong.io",
  bip44: {
    coinType: 639,
  },
  bech32Config: {
    bech32PrefixAccAddr: "bitsong",
    bech32PrefixAccPub: "bitsongpub",
    bech32PrefixValAddr: "bitsongvaloper",
    bech32PrefixValPub: "bitsongvaloperpub",
    bech32PrefixConsAddr: "bitsongvalcons",
    bech32PrefixConsPub: "bitsongvalconspub",
  },
  currencies: [
    {
      coinDenom: "BTSG",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "bitsong",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "BTSG",
      coinMinimalDenom: "ubtsg",
      coinDecimals: 6,
      coinGeckoId: "bitsong",
      gasPriceStep: {
        low: 10,
        average: 25,
        high: 30,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go", "cosmwasm"],
  isTestnet: false,
};
export const testnetConfig: ChainInfo = {
  ...mainnetConfig,
  rpc: "https://rpc.bwasmnet-1.bitsong.network",
  rest: "https://api.bwasmnet-1.bitsong.network",
  chainId: "bwasmnet-1",
  chainName: "BitSong Testnet",
  isTestnet: true,
};
