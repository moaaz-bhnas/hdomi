import React, { memo, useEffect, useState, useContext } from 'react';
import {
  StyledTopBar, 
  Container,
  Invitation,
  B,
  InvitationLink
} from '../style';
import { DestinationContext } from '../../../contexts/destination';

const TopBar = () => {
  const [ visible, setVisible ] = useState(true);
  const { setDestination } = useContext(DestinationContext);

  useEffect(function handleScroll() {
    document.onscroll = function checkWindowScrollYAndSetScrolled() {
      const visible = window.scrollY <= 100;
      setVisible(visible);
    }
  }, []);
  
  return (
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
  );
}

export default memo(TopBar);