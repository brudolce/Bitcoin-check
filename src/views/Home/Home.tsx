import React from 'react';
import { useHistory } from 'react-router-dom';
import CoolButton from '../../components/CoolButton/CoolButton';
import Display from '../../components/Display/Display';
import Page from '../../components/Page/Page';

const Home: React.FC = () => {
  const history = useHistory();

  const changePage = (): void => history.push('/info');

  return (
    <Page backgroundURL="https://wallpaperaccess.com/full/2454628.png">
      <Display>
        Test Application to talk about some vulgar display of Typescript
      </Display>
      <CoolButton onClick={changePage} size={2}>
        Bitcoin Value Check
      </CoolButton>
    </Page>
  );
};

export default Home;
