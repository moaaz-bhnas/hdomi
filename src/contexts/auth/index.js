import React, { useEffect, useState, createContext, useContext } from 'react';
import firebase from '../../lib/firebase';
import usePrevious from '../../hooks/usePrevious';
import { useHistory } from 'react-router-dom';
import { DestinationContext } from '../destination';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState('notSet');
  console.log('user: ', user);
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  const { destination } = useContext(DestinationContext);
  const history = useHistory();
  const prevUser = usePrevious(user);
  useEffect(function redirectBasedOnAuthState() {
    if (!prevUser && user.uid) { // to redirect only if a user wasn't authenticated, and then signed in
      history.push(destination);
    }
  }, [ user ]);

  return (
    <AuthContext.Provider value={ user }>
      {children}
    </AuthContext.Provider>
  )
}