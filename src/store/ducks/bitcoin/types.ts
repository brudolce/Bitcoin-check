export enum Bitcointypes {
  bitcoinData = '@bitcoinData',
  bitcoinTime = '@bitcoinTime',
}

export interface BitcoinState {
  bitcoinData: Array<any>;
  bitcoinTime: string;
}
