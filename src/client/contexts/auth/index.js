import React, { useEffect, useState, createContext } from 'react';
import Router from 'next/router';
import firebase from '../../lib/firebase';
import usePrevious from '../../hooks/usePrevious';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ user, setUser ] = useState('notSet');
  console.log('user: ', user);
  
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  const prevUser = usePrevious(user);
  useEffect(function redirectBasedOnAuthState() {
    if (!prevUser && user.uid) { // to redirect only if a user wasn't authenticated, and then signed in
      Router.push('/');
    }
  }, [ user ]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}