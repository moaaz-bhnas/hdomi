import React, { memo } from 'react';
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

const Header = () => {
  return (
    <StyledHeader>
      <Title>{title}</Title>

      <Navigation>
        <NavigationTitle>Navigation Bar</NavigationTitle>
        <TopAndMiddleBarsContainer>
          <TopBar />
          <MiddleBar />
        </TopAndMiddleBarsContainer>
        <BottomBar />
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);