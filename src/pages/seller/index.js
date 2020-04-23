import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';

const Seller = ({ match: { url } }) => {
  console.log(url);
  return (
    <Switch>
      <Route 
        exact
        path={`${url}/`}
        component={Dashboard}
      />
    </Switch>
  );
}

export default memo(Seller);