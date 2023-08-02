import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQONGBw8ifYKi4-Zz9T0kZZvJbCaove90",
  authDomain: "duckduck-caf49.firebaseapp.com",
  projectId: "duckduck-caf49",
  storageBucket: "duckduck-caf49.appspot.com",
  messagingSenderId: "435891700133",
  appId: "1:435891700133:web:e821e2edf61fd83d18a84c",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firebase, firestore };
