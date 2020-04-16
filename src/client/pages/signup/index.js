import { memo } from 'react';
import Layout from '../../components/layout';
import {
  // AuthPage
} from './style';
import AuthForm from '../../components/authForm';

const SignupPage = () => {
  return (
    <Layout>
      <AuthForm type="signup" />
    </Layout>
  );
}

export default memo(SignupPage);