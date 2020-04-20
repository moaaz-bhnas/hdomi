import React, { memo } from 'react'
import {  
  StyledDashboardBar
} from '../style';
import DashboardSidebar from './dashboardSidebar';
import Logo from '../../logo';
import Chat from './chat';
import AccountDropdown from './accountDropdown';

const DashboardBar = () => {
  return (
    <StyledDashboardBar>
      <DashboardSidebar />
      <Logo color="#fff" outline="#fff" />
      <Chat />
      <AccountDropdown />
    </StyledDashboardBar>
  );
}

export default memo(DashboardBar);