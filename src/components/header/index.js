import React, { memo, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {
  StyledHeader,
  Title,
  Navigation,
  NavigationTitle,
  TopAndMiddleBarsContainer
} from './style';
import TopBar from './components/topBar';
import MiddleBar from './components/middleBar';
import BottomBar from './components/bottomBar';
import { title } from '../../shared/data';
import { AuthContext } from '../../contexts/auth';
import DashboardBar from './components/dashboardBar';

const Header = () => {
  const { pathname } = useLocation();
  const dashboardHeader = pathname.includes('dashboard');

  const user = useContext(AuthContext);
  const topBarHidden = user && user.seller;

  return (
    <StyledHeader data-topbar={!topBarHidden} data-dashboard={dashboardHeader}>
      <Title>{title}</Title>

      <Navigation>
        <NavigationTitle>Navigation Bar</NavigationTitle>
        {
          dashboardHeader ?
          <DashboardBar /> :
          <>
            <TopAndMiddleBarsContainer>
              {!topBarHidden && <TopBar />}
              <MiddleBar />
            </TopAndMiddleBarsContainer>
            <BottomBar />
          </>
        }
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);