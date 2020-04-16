module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contexts/auth/index.js":
/*!********************************!*\
  !*** ./contexts/auth/index.js ***!
  \********************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/firebase */ "./lib/firebase/index.js");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/usePrevious */ "./hooks/usePrevious.js");
var _jsxFileName = "C:\\Users\\bhnas\\OneDrive\\Desktop\\hdomi-seller-center\\src\\client\\contexts\\auth\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('notSet');
  console.log('user: ', user); // Add auth listener

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function addAuthStateListener() {
    _lib_firebase__WEBPACK_IMPORTED_MODULE_2__["default"].auth().onAuthStateChanged(setUser);
  }, []);
  const prevUser = Object(_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_3__["default"])(user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function redirectBasedOnAuthState() {
    if (!prevUser && user.uid) {
      // to redirect only if a user wasn't authenticated, and then signed in
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }, [user]);
  return __jsx(AuthContext.Provider, {
    value: {
      user
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./hooks/usePrevious.js":
/*!******************************!*\
  !*** ./hooks/usePrevious.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (value => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
});

/***/ }),

/***/ "./lib/firebase/index.js":
/*!*******************************!*\
  !*** ./lib/firebase/index.js ***!
  \*******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);



const config = {
  apiKey: "AIzaSyCrkZx-p3cJn7PqwsjiPlewtALcQed1cFc",
  authDomain: "hdomi-a0d75.firebaseapp.com",
  databaseURL: "https://hdomi-a0d75.firebaseio.com",
  projectId: "hdomi-a0d75",
  storageBucket: "hdomi-a0d75.appspot.com",
  messagingSenderId: "356527672726",
  appId: "1:356527672726:web:7b8d0bb2736e1f957321b7",
  measurementId: "G-62SBP9811J"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
}

/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ "./pages/global.css.js");
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/auth */ "./contexts/auth/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-firestore */ "redux-firestore");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase/index.js");
var _jsxFileName = "C:\\Users\\bhnas\\OneDrive\\Desktop\\hdomi-seller-center\\src\\client\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const rrfProps = {
  firebase: _lib_firebase__WEBPACK_IMPORTED_MODULE_8__["default"],
  config: {
    useFirestoreForProfile: true,
    userProfile: 'users'
  },
  dispatch: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch,
  createFirestoreInstance: redux_firestore__WEBPACK_IMPORTED_MODULE_7__["createFirestoreInstance"]
};

const myApp = ({
  Component,
  pageProps
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__["ReactReduxFirebaseProvider"], _extends({}, rrfProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_contexts_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })))));
};

const makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(makeStore)(myApp));

/***/ }),

/***/ "./pages/global.css.js":
/*!*****************************!*\
  !*** ./pages/global.css.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/theme */ "./shared/theme/index.js");
/* harmony import */ var _shared_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/fonts */ "./shared/fonts/index.js");



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${_shared_fonts__WEBPACK_IMPORTED_MODULE_2__["default"].sansSerif};
    color: ${_shared_theme__WEBPACK_IMPORTED_MODULE_1__["default"].text.default};
    background-color: ${_shared_theme__WEBPACK_IMPORTED_MODULE_1__["default"].bg.primary};
    margin: 0;
    padding: 0;
  }

  button {
    font-size: 1rem;
    cursor: pointer;
  }
`);

/***/ }),

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return _objectSpread({}, state, {
        authError: action.err.message
      });

    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return _objectSpread({}, state, {
        authError: null
      });

    case 'LOGIN_ERROR':
      console.log('login error');
      return _objectSpread({}, state, {
        authError: action.err.message
      });

    case 'LOGIN_SUCCESS':
      console.log('login success');
      return _objectSpread({}, state, {
        authError: null
      });

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;

    case 'SIGNOUT_ERROR':
      console.log('signout error');
      return _objectSpread({}, state, {
        authError: action.err.message
      });

    case 'RESET_ERROR':
      return _objectSpread({}, state, {
        authError: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-firestore */ "redux-firestore");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_3__);




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  // movie: movieReducer,
  firebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_2__["firebaseReducer"],
  firestore: redux_firestore__WEBPACK_IMPORTED_MODULE_3__["firestoreReducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");
/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-firestore */ "redux-firestore");
/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/firebase */ "./lib/firebase/index.js");






const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a.withExtraArgument({
  getFirebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_3__["getFirebase"],
  getFirestore: redux_firestore__WEBPACK_IMPORTED_MODULE_4__["getFirestore"]
})), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_4__["reduxFirestore"])(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./shared/fonts/index.js":
/*!*******************************!*\
  !*** ./shared/fonts/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fonts = {
  serif: 'Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  sansSerif: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};
/* harmony default export */ __webpack_exports__["default"] = (fonts);

/***/ }),

/***/ "./shared/theme/index.js":
/*!*******************************!*\
  !*** ./shared/theme/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  text: {
    default: '#1b1e2f',
    interactive: '#d77e6a',
    secondaryLightOpposite: '#766852'
  },
  bg: {
    primary: '#FAF9F7',
    secondary: '#1B1E2F',
    accent: '#d77e6a',
    secondaryLight: '#bbbcc1',
    secondaryLightOpposite: '#766852',
    grey: '#EDEDED'
  },
  border: {
    japonica: '#d77e6a',
    grey: '#ddd'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-firebase":
/*!***************************************!*\
  !*** external "react-redux-firebase" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-firebase");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-firestore":
/*!**********************************!*\
  !*** external "redux-firestore" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-firestore");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map