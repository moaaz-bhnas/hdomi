import React, { memo } from 'react'
import AuthForm from '../../components/authForm';
import { Container } from '../../components/container/style';

const AuthPage = ({ action }) => {
  return (
    <Container>
      <AuthForm action={action} />
    </Container>
  );
}

export default memo(AuthPage);