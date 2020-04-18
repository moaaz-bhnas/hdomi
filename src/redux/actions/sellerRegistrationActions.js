export const registerSeller = (seller) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(seller);
    const { uid, firstName, lastName, phoneNumber, storeName, address, openingHour, closingHour } = seller;

    firestore.collection('sellers').doc(uid).set({
      firstName, lastName, phoneNumber, storeName, address, openingHour, closingHour
    }).then(() => {
      dispatch({ type: 'SELLER_REGISTRATION_SUCCESS' });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'SELLER_REGISTRATION_ERROR', err });
    });
  }
}