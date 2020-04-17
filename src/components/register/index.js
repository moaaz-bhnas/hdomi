import React, { memo } from 'react'
import {
  Form,
  PersonalInfo,
  InputContainer
} from './style';

const Register = () => {
  return (
    <Form>
      <PersonalInfo>
        <InputContainer>
          register
        </InputContainer>
      </PersonalInfo>
    </Form>
  );
}

export default memo(Register);