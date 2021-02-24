import firebase from 'firebase/app';
import 'firebase/storage';

// Config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: 'my-portfolio-7def9.firebaseapp.com',
  projectId: 'my-portfolio-7def9',
  storageBucket: 'my-portfolio-7def9.appspot.com',
  messagingSenderId: '1003510881620',
  appId: '1:1003510881620:web:301c8cf7a9b54aae447cc1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access to storage
const storage = firebase.storage();
const storageRef = storage.ref();

export default storageRef;
