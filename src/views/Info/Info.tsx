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
import Card from '../../components/Card/Card';

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
      // this application has no intention of being used in production
      // let's have some consoles on the master branch
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
      <Display vert>
        <Display>
          {state.bitcoinData?.map((el) => (
            <Card key={el.code} fontsize={3} size={2}>
              <div>{el.code}</div>
              <div> {el.rate_float}</div>
            </Card>
          ))}
        </Display>
        <div>{state.bitcoinTime} - Updated Hourly</div>
      </Display>

      <CoolButton size={2} onClick={loadBitcoin}>
        Update
      </CoolButton>
    </Page>
  );
};

export default Info;
