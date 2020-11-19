// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMzIYUZ4CehIkhC6VpGlxx7RFcwIaOh5w",
    authDomain: "clone-16a98.firebaseapp.com",
    databaseURL: "https://clone-16a98.firebaseio.com",
    projectId: "clone-16a98",
    storageBucket: "clone-16a98.appspot.com",
    messagingSenderId: "540258998593",
    appId: "1:540258998593:web:8fecad522779ab0c8169c0",
    measurementId: "G-KKYV068LPR"
  };

  const firebaseAp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth};