import { memo, useEffect, useState } from 'react';
import Link from 'next/link';
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
          <Link passHref href="seller">
            <InvitationLink>
              <B>sell with us</B>
            </InvitationLink>
          </Link> 
        </Invitation>
      </Container>
    </StyledTopBar>
  );
}

export default memo(TopBar);