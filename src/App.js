import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Header from './components/header';
import AuthPage from './pages/auth';
import Home from './pages/home';
import { 
  StyledApp,
  Main
} from './style';
import RegisterPage from './pages/register';
import DashboardPage from './pages/dashboard';

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route 
            path="/signup" 
            component={props => <AuthPage {...props} action={'signup'} />} 
          />
          <Route 
            path="/login" 
            component={props => <AuthPage {...props} action={'login'} />} 
          />
          <PrivateRoute 
            path="/register" 
            component={RegisterPage} 
          />
          <PrivateRoute 
            path="/seller" 
            component={DashboardPage} 
          />
        </Switch>
      </Main>
    </StyledApp>
  );
}

export default App;