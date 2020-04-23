import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import SponsoredProducts from './pages/sponsoredProducts';

const Seller = ({ match: { url } }) => {
  console.log(url);
  return (
    <Switch>
      <Route 
        exact
        path={`${url}/`}
        component={Dashboard}
      />
      <Route 
        path={`${url}/products`}
        component={Products}
      />
      <Route 
        path={`${url}/sponsored-products`}
        component={SponsoredProducts}
      />
    </Switch>
  );
}

export default memo(Seller);