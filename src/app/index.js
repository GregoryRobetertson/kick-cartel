const admin = require('firebase-admin');

let serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
