// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDOHQf6ruWbzQ_xk0xRL3MbWXV_JuGCjqA",
    authDomain: "challenge-9e275.firebaseapp.com",
    databaseURL: "https://challenge-9e275-default-rtdb.firebaseio.com",
    projectId: "challenge-9e275",
    storageBucket: "challenge-9e275.appspot.com",
    messagingSenderId: "831657408285",
    appId: "1:831657408285:web:1c34e21218de69ed2953f4",
    measurementId: "G-VYL6K2SXWE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export{db,auth};