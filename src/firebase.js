import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'




var config = {
    apiKey: "AIzaSyCQzjZ-zTC--cGsSLrPvIgvdVvfNABhqQ0",
    authDomain: "cart-9713d.firebaseapp.com",
    databaseURL: "https://cart-9713d.firebaseio.com",
    projectId: "cart-9713d",
    storageBucket: "cart-9713d.appspot.com",
    messagingSenderId: "431752503233",
    appId: "1:431752503233:web:a2c831fb3bfb62abbc5940",
    measurementId: "G-26P5CRSY1E"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(config);

  const db = firebase.firestore();

export {fb,db}

  
  