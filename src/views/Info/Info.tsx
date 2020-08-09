import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import {
  setBitcoinData,
  setBitcoinTime,
} from '../../store/ducks/bitcoin/actions';
import Page from '../../components/Page/Page';
import Display from '../../components/Display/Display';
import CoolButton from '../../components/CoolButton/CoolButton';

const Info: React.FC = () => {
  const state = useSelector(
    (reduxState: ApplicationState) => reduxState.bitcoin
  );

  const dispatch = useDispatch();

  const loadBitcoin = async (): Promise<void> => {
    try {
      const response = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
      );
      const data = await response.json();

      dispatch(setBitcoinData(Object.values(data.bpi)));
      dispatch(setBitcoinTime(data.time.updated));
      console.log(state);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    loadBitcoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page backgroundURL="https://wallpaperaccess.com/full/2454628.png">
      <Display vert height={30} fontsize={4}>
        {state.bitcoinData.map((el) => (
          <div key={el.code}>{el.code}</div>
        ))}
        <div>{state.bitcoinTime}</div>
      </Display>
      <CoolButton size={2} onClick={loadBitcoin}>
        Update
      </CoolButton>
    </Page>
  );
};

export default Info;
