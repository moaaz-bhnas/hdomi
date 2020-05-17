import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Header from './components/header';
import Footer from './components/footer';
import AuthPage from './pages/auth';
import Home from './pages/home';
import { 
  StyledApp,
  Main
} from './style';
import RegisterPage from './pages/register';
import SellerPage from './pages/seller';
import ServicesPage from './pages/services';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';

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
          <Route 
            path="/services" 
            component={ServicesPage} 
          />
          <Route 
            path="/contact" 
            component={ContactPage} 
          />
          <Route 
            path="/about" 
            component={AboutPage} 
          />
        </Switch>
      </Main>
      <Footer />
    </StyledApp>
  );
}

export default App;