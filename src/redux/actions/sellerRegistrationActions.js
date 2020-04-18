export const registerSeller = (seller) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { userId, firstName, lastName, phoneNumber, storeName, address, openingHour, endingHour } = data;

    firestore.collection('sellers').doc(userId).set({
      firstName, lastName, phoneNumber, storeName, address, openingHour, endingHour
    }).then(() => {
      dispatch({ type: 'SELLER_REGISTRATION_SUCCESS' });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'SELLER_REGISTRATION_ERROR', err });
    });
  }
}