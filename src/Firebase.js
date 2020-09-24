/** @format */
import firebase from "firebase";
const firebaseConfig = {
      ******Add your firebaseconfig**********
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
