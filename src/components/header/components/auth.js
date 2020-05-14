import React, { memo } from 'react';
import {
  StyledAuth,
  AuthLink,
  Span
} from '../style';

const Auth = () => {
  return (
    <StyledAuth>
      <AuthLink to="login">Log in</AuthLink>

      <Span>|</Span> 
      
      <AuthLink to="signup">Create account</AuthLink>
    </StyledAuth>
  );
}

export default memo(Auth);