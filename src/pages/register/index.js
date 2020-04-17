import React, { memo } from 'react';
import { Container } from '../../components/container/style';
import Form from '../../components/register';

const RegisterPage = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default memo(RegisterPage);