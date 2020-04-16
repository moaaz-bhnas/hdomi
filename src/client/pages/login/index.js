import { memo } from 'react';
import Layout from '../../components/layout';
import AuthForm from '../../components/authForm';

const LoginPage = () => {
  return (
    <Layout>
      <AuthForm type="login" />
    </Layout>
  );
}

export default memo(LoginPage);