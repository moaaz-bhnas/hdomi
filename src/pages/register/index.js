import React, { memo, useContext } from 'react';
import { Container } from '../../components/container/style';
import Form from '../../components/register';
import { AuthContext } from '../../contexts/auth';
import { Redirect } from 'react-router-dom';

const RegisterPage = () => {
  const user = useContext(AuthContext);

  return (
    <>
      {
        user.seller ?
        <Redirect to="/dashboard" /> :
        <Container>
          <Form />
        </Container>
      }
    </>
  );
}

export default memo(RegisterPage);