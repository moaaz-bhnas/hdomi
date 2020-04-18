import React, { memo, useContext, useRef } from 'react';
import {
  StyledMiddleBar, 
  Container
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
  const chatButtonRef = useRef(null);

  return (
    <StyledMiddleBar>
      <Container>
        <Sidebar />
        <SearchForm />
        {
          user ?
          <>
            <Favorites />
            <Chat ref={chatButtonRef} />
            <AccountDropdown chatButtonRef={chatButtonRef} />
          </> :
          <Auth />
        }
      </Container>
    </StyledMiddleBar>
  );
}

export default memo(MiddleBar);