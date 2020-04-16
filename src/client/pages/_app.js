import GlobalStyles from './global.css';
// import { AuthProvider } from '../contexts/auth';
// import { Provider } from 'react-redux';
// import withRedux from "next-redux-wrapper";
// import store from '../redux/store';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
// import firebase from '../lib/firebase';

// const rrfProps = {
//   firebase,
//   config: {
//     useFirestoreForProfile: true,
//     userProfile: 'users'
//   },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

const myApp = ({ Component, pageProps }) => {
  return (
    <>
    {/* <Provider store={store}> */}
      {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
        {/* <AuthProvider> */}
          <GlobalStyles />
          <Component {...pageProps} />
        {/* </AuthProvider> */}
      {/* </ReactReduxFirebaseProvider> */}
    {/* </Provider> */}
    </> 
  );
}

// const makeStore = () => store;

// export default withRedux(makeStore)(myApp);
export default myApp;