/** @format */
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB5W56zAklK5XXDaO5uRgBGwXL5-wIsKv0",
  authDomain: "twitter-clone-10ff7.firebaseapp.com",
  databaseURL: "https://twitter-clone-10ff7.firebaseio.com",
  projectId: "twitter-clone-10ff7",
  storageBucket: "twitter-clone-10ff7.appspot.com",
  messagingSenderId: "356593665870",
  appId: "1:356593665870:web:2f07aeaa78079e15ae801f",
  measurementId: "G-BH41Q2HB4Y",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
