import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

var firebaseConfig = {
  apiKey: "AIzaSyD9kmhHcaYjFWJ2SKogH5tKBsaKnnT0py8",
  authDomain: "quiz-fd0b4.firebaseapp.com",
  projectId: "quiz-fd0b4",
  storageBucket: "quiz-fd0b4.appspot.com",
  messagingSenderId: "574470017718",
  appId: "1:574470017718:web:e24f37318e976b16b24c17",
  measurementId: "G-VLGFSV9V4H"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}