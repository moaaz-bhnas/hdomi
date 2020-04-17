import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Header from './components/header';
import Auth from './pages/auth';
import Home from './pages/home';
import { 
  StyledApp,
  Main
} from './style';

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route 
            path="/signup" 
            component={props => <Auth {...props} action={'signup'} />} 
          />
          <Route 
            path="/login" 
            component={props => <Auth {...props} action={'login'} />} 
          />
        </Switch>
      </Main>
    </StyledApp>
  );
}

export default App;