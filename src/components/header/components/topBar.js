import React, { memo, useEffect, useState } from 'react';
import {
  StyledTopBar, 
  Container,
  Invitation,
  B,
  InvitationLink
} from '../style';

const TopBar = () => {
  const [ visible, setVisible ] = useState(true);

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
          <InvitationLink to="/register">
            <B>sell with us</B>
          </InvitationLink>
        </Invitation>
      </Container>
    </StyledTopBar>
  );
}

export default memo(TopBar);