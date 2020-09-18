import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Statistics, Welcome} from '../pages/index';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/ListCountry" component={Statistics} />
    </Switch>
  );
};
