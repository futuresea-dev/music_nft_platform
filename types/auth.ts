export enum SessionType {
  KEPLR = "keplr",
  LEAPWALLET = "leapwallet",
  COSMOSTATION = "cosmostation",
}

export interface AuthState {
  loading: boolean;
  session?: SessionType;
  token?: string;
}
