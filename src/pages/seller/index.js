import React, { memo, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LayoutContext } from '../../contexts/layout';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import SponsoredProducts from './pages/sponsoredProducts';
import {
  SellerPage, 
  Container
} from './style';
import AddProduct from './pages/addProduct';

const Seller = ({ match: { url } }) => {
  const { sellerSidebarExpanded: sidebarExpanded } = useContext(LayoutContext);

  return (
    <SellerPage sidebarExpanded={sidebarExpanded}>
      <Container>
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
          <Route 
            path={`${url}/add-product`}
            component={AddProduct}
          />
        </Switch>
      </Container>
    </SellerPage>
  );
}

export default memo(Seller);