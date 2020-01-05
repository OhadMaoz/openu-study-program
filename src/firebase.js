import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDq3aP30XrS7_iqwJ2JIDD-pq_MhZOXVNw",
  authDomain: "study-program-64b3a.firebaseapp.com",
  databaseURL: "https://study-program-64b3a.firebaseio.com",
  projectId: "study-program-64b3a",
  storageBucket: "study-program-64b3a.appspot.com",
  messagingSenderId: "252137292921"
});

export { firebaseConfig as firebase };
