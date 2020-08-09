import { createStore, Store } from 'redux';
import { BitcoinState } from './ducks/bitcoin/types';
import rootreducer from './ducks/rootReducer';

export interface ApplicationState {
  bitcoin: BitcoinState;
}

const store: Store = createStore(rootreducer);

export default store;
