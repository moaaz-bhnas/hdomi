import React, { memo, useState, useRef, useEffect } from 'react';
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
  const topAndMidBarsContainerRef = useRef(null);

  const [ topOffset, setTopOffset ] = useState(null);
  useEffect(function getAndSetHeight() {
    const topOffset = topAndMidBarsContainerRef.current.offsetHeight;
    setTopOffset(topOffset);
  }, []);

  return (
    <StyledHeader style={{ paddingTop: topOffset }}>
      <Title>{title}</Title>

      <Navigation>
        <NavigationTitle>Navigation Bar</NavigationTitle>
        <TopAndMiddleBarsContainer ref={topAndMidBarsContainerRef}>
          <TopBar />
          <MiddleBar />
        </TopAndMiddleBarsContainer>
        <BottomBar />
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);