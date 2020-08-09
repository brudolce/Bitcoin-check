/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import { Bitcointypes } from './types';

export const setBitcoinData = (payload: Array<any>) =>
  action(Bitcointypes.bitcoinData, payload);

export const setBitcoinTime = (payload: string) =>
  action(Bitcointypes.bitcoinTime, payload);
