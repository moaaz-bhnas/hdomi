import React, { memo, useContext, useRef } from 'react';
import {
  StyledMiddleBar, 
  Container,
  StoreLink
} from '../style';
import SearchForm from './searchForm';
import Favorites from './favorites';
import Sidebar from './sidebar';
import Auth from './auth';
import Chat from './chat';
import AccountDropdown from './accountDropdown';
import { AuthContext } from '../../../contexts/auth';

const MiddleBar = () => {
  const user = useContext(AuthContext);
  const storeLinkRef = useRef(null);

  return (
    <StyledMiddleBar>
      <Container>
        <Sidebar />
        <SearchForm />
        {
          user ?
          <>
            <Favorites />
            <Chat />
            <StoreLink to="/seller" ref={storeLinkRef}>My store</StoreLink>
            <AccountDropdown previousInteractiveElement={storeLinkRef} />
          </> :
          <Auth />
        }
      </Container>
    </StyledMiddleBar>
  );
}

export default memo(MiddleBar);