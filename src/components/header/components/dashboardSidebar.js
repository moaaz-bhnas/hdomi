import React, { memo } from 'react'
import {  
  StyledDashboardSidebar
} from '../style';
import SidebarToggler from './sidebarToggler';

const DashboardSidebar = () => {
  return (
    <StyledDashboardSidebar>
      <SidebarToggler />
    </StyledDashboardSidebar>
  );
}

export default memo(DashboardSidebar);