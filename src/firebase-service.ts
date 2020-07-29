import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://testauthentication-ac211.firebaseio.com",
});

export default admin;