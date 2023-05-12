import { Window as KeplrWindow } from "@keplr-wallet/types";

export interface WalletWindow {
  leap?: Keplr;
  keplr?: Keplr;
  cosmostation?: {
    cosmos: any;
    providers: {
      keplr: Keplr;
    };
  };
  getOfflineSigner?: (
    chainId: string
  ) => OfflineAminoSigner & OfflineDirectSigner;
  getOfflineSignerOnlyAmino?: (chainId: string) => OfflineAminoSigner;
  getOfflineSignerAuto?: (
    chainId: string
  ) => Promise<OfflineAminoSigner | OfflineDirectSigner>;
  getEnigmaUtils?: (chainId: string) => SecretUtils;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends WalletWindow {}
}
