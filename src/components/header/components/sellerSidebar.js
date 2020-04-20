import React, { memo } from 'react'
import {  
  StyledSellerSidebar
} from '../style';
import SidebarToggler from './sidebarToggler';

const SellerSidebar = () => {
  return (
    <StyledSellerSidebar>
      <SidebarToggler />
    </StyledSellerSidebar>
  );
}

export default memo(SellerSidebar);