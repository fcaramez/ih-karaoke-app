import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_PROJECTID,
  storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKERT,
  messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_GOOGLE_APPID,
};

export default firebaseConfig;
