import { Route, Switch } from 'react-router-dom';

import Core from './containers/Core';
import HomePage from '@/pages/HomePage';
import React from 'react';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Core />
    </>
  );
}

export default App;
