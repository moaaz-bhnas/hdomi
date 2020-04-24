import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import GlobalStyles from './global.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import dotenv from 'dotenv';
import firebase from './lib/firebase';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, createFirestoreInstance, getFirestore } from 'redux-firestore';
import firebaseConfig from './lib/firebase';
import { AuthProvider } from './contexts/auth';
import { DestinationProvider } from './contexts/destination';
import { LayoutProvider } from './contexts/layout';

// Environment variables
dotenv.config();

// redux
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: 'users'
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps} >
      <Router basename="hdomi">
        <DestinationProvider>
          <AuthProvider>
            <LayoutProvider>
              <GlobalStyles />
              <App />
            </LayoutProvider>
          </AuthProvider>
        </DestinationProvider>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



