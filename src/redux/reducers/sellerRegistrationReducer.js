const initState = {
  authError: null
};

const sellerRegistrationReducerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SELLER_REGISTRATION_ERROR':
      console.log('seller registered');
      return {
        ...state,
        authError: action.err.message
      }
    case 'SELLER_REGISTRATION_SUCCESS':
      console.log('seller registeration error');
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
}

export default sellerRegistrationReducer;