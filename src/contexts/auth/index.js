import React, { useEffect, useState, createContext } from 'react';
import firebase from '../../lib/firebase';
import usePrevious from '../../hooks/usePrevious';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState('notSet');
  console.log('user: ', user);
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  const history = useHistory();
  const prevUser = usePrevious(user);
  useEffect(function redirectBasedOnAuthState() {
    if (!prevUser && user.uid) { // to redirect only if a user wasn't authenticated, and then signed in
      history.push('/');
    }
  }, [ user ]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}