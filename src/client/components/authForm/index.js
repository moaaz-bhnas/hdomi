import { memo } from 'react';
import SignupForm from './components/signupForm';
import LoginForm from './components/loginForm';

const AuthForm = ({ type }) => {
  return (
    type === 'login' ?
    <LoginForm /> :
    <SignupForm />
  );
}

export default memo(AuthForm);