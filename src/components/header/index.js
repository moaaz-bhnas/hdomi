import React, { memo, useState, useEffect, useContext } from 'react';
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
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useContext(AuthContext);

  useFirestoreConnect([
    { collection: 'sellers' }
  ])
  const sellers = useSelector(state => state.firestore.data.sellers);
  
  const [ userHasStore, setUserHasStore ] = useState(null);
  useEffect(function checkUserHasStoreAndUpdateState() {
    if (!user) {
      setUserHasStore(false);
      return;
    }
    if (sellers) {
      const userHasStore = sellers[user.uid];
      setUserHasStore(userHasStore);
    }
  }, [ user, sellers ]);

  const topBarHidden = (userHasStore === null) || userHasStore;

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