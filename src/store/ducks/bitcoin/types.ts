export enum Bitcointypes {
  setbitcoinData = '@setbitcoinData',
  setbitcoinTime = '@setbitcoinTime',
}

export interface BitcoinState {
  bitcoinData: Array<any>;
  bitcoinTime: string;
}
