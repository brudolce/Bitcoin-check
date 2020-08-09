/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import { Bitcointypes } from './types';

export const setBitcoinData = (payload: Array<any>) =>
  action(Bitcointypes.setbitcoinData, payload);

export const setBitcoinTime = (payload: string) =>
  action(Bitcointypes.setbitcoinTime, payload);
