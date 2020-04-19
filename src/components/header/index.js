import React, { memo, useContext } from 'react';
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

const Header = () => {
  const user = useContext(AuthContext);
  const topBarHidden = user && user.seller;

  return (
    <StyledHeader topBarHidden={topBarHidden}>
      <Title>{title}</Title>

      <Navigation>
        <NavigationTitle>Navigation Bar</NavigationTitle>
        <TopAndMiddleBarsContainer>
          {!topBarHidden && <TopBar />}
          <MiddleBar />
        </TopAndMiddleBarsContainer>
        <BottomBar />
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);