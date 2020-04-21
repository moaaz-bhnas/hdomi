import React, { memo } from 'react'
import {  
  StyledSellerSidebar, 
  SellerSidebarList,
  SellerSidebarItem,
  SellerSidebarLink
} from '../style';
import SidebarToggler from './sidebarToggler';
import dashboardIcon from '../../../img/dashboard.svg';
import productsIcon from '../../../img/products1.svg';
import sponsoredIcon from '../../../img/sponsored.svg';

const items = [ 
  { value: 'dashboard',          icon: dashboardIcon },
  { value: 'products',           icon: productsIcon },
  { value: 'sponsored products', icon: sponsoredIcon }
];

const Item = ({ itemObject }) => {
  const { value, icon } = itemObject;
  const href = (value === 'dashboard') ? '/seller' : `/seller/${value.split(' ').join('-')}`;

  return (
    <SellerSidebarItem>
      <SellerSidebarLink to={href}>
        {value}
      </SellerSidebarLink>
    </SellerSidebarItem>
  );
}

const SellerSidebar = () => {
  return (
    <StyledSellerSidebar>
      <SidebarToggler />

      <SellerSidebarList>
        {
          items.map(item => (
            <Item key={item.value} itemObject={item} />
          ))
        }
      </SellerSidebarList>
    </StyledSellerSidebar>
  );
}

export default memo(SellerSidebar);