import { memo } from 'react';
import Header from '../header';
import {
  Main,
  Container
} from './style';

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
    </>
  );
}

export default memo(Layout);