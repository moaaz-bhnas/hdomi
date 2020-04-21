import React, { memo } from 'react'
import {  
  StyledSellerSidebar, 
  SellerSidebarList,
  SellerSidebarItem,
  SellerSidebarLink,
  SellerSidebarIcon,
  RightArrow
} from '../style';
import SidebarToggler from './sidebarToggler';
import SvgDashboard from '../../../svgs/dashboard';
import SvgProducts from '../../../svgs/products';
import SvgSponsored from '../../../svgs/sponsored';
import rightArrow from '../../../img/right-arrow.svg';

const items = [ 
  { value: 'dashboard',          Icon: SvgDashboard },
  { value: 'products',           Icon: SvgProducts },
  { value: 'sponsored products', Icon: SvgSponsored }
];

const Item = ({ itemObject }) => {
  const { value, Icon } = itemObject;
  const href = (value === 'dashboard') ? '/seller' : `/seller/${value.split(' ').join('-')}`;

  return (
    <SellerSidebarItem>
      <SellerSidebarLink to={href}>
        <Icon />
        {value}
        <RightArrow src={rightArrow} alt="" />
      </SellerSidebarLink>
    </SellerSidebarItem>
  );
}

const SellerSidebar = () => {
  return (
    <StyledSellerSidebar>
      <SidebarToggler size="1.2em" />

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