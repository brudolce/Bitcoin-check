import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import AppStyles from './App.styles';

const App: React.FC = () => {
  const CSS = AppStyles.factory();

  return (
    <div style={CSS.globalCSS as React.CSSProperties}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </div>
  );
};

export default App;
