import React, { memo, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import AuthForm from '../../components/authForm';
import { Container } from '../../components/container/style';
import { AuthContext } from '../../contexts/auth';

const AuthPage = ({ action }) => {
  const user = useContext(AuthContext);

  return (
    <>
      {
        user ? 
        <Redirect to="/" /> :
        <Container>
          <AuthForm action={action} />
        </Container>
      }
    </>
  );
}

export default memo(AuthPage);