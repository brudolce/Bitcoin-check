import { Reducer } from 'redux';
import { BitcoinState, Bitcointypes } from './types';

const INITIAL_STATE: BitcoinState = { bitcoinTime: '', bitcoinData: [] };
const reducer: Reducer<BitcoinState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case Bitcointypes.bitcoinData:
      return { ...state, bitcoinData: payload };
    case Bitcointypes.bitcoinTime:
      return { ...state, bitcoinTime: payload };
    default:
      return state;
  }
};

export default reducer;
