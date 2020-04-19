const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addSellerRole = functions.https.onCall(data => {
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      seller: true
    });
  }).then(() => {
    return {
      message: `Success! ${user.email} has been made an admin`
    };
  }).catch(err => {
    return err;
  });
});
