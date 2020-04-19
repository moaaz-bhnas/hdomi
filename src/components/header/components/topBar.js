import React, { memo, useEffect, useState, useContext } from 'react';
import {
  StyledTopBar, 
  Container,
  Invitation,
  B,
  InvitationLink
} from '../style';
import { DestinationContext } from '../../../contexts/destination';
import { AuthContext } from '../../../contexts/auth';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const TopBar = () => {
  const [ userHasStore, setUserHasStore ] = useState(false);
  useFirestoreConnect([
    { collection: 'sellers' }
  ])
  const sellers = useSelector(state => state.firestore.data.sellers);
  const user = useContext(AuthContext);
  useEffect(function checkUserHasStoreAndUpdateState() {
    if (!user || !sellers) return;

    const userHasStore = sellers[user.uid];
    setUserHasStore(userHasStore);
  }, [ sellers ]);

  const { setDestination } = useContext(DestinationContext);

  const [ visible, setVisible ] = useState(true);
  useEffect(function handleScroll() {
    document.onscroll = function checkWindowScrollYAndSetScrolled() {
      const visible = window.scrollY <= 100;
      setVisible(visible);
    }
  }, []);
  
  return (
    <>{!userHasStore &&
      <StyledTopBar data-visible={visible}>
        <Container>
          <Invitation>
            Have a store? 
            <InvitationLink 
              to="/register"
              onClick={() => setDestination('/register')}
            >
              <B>sell with us</B>
            </InvitationLink>
          </Invitation>
        </Container>
      </StyledTopBar>
    }</>
  );
}

export default memo(TopBar);