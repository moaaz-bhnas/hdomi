import { memo } from 'react';
import Link from 'next/link';
import {
  StyledAuth,
  AuthLink,
  Span
} from '../style';

const Auth = () => {
  return (
    <StyledAuth>
      <Link passHref href="login">
        <AuthLink>Log in</AuthLink>
      </Link> 

      <Span>or</Span> 
      
      <Link passHref href="signup">
        <AuthLink>Create account</AuthLink>
      </Link>
    </StyledAuth>
  );
}

export default memo(Auth);