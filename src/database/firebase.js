import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtltkTt5hTvVJMno2_eqX-rFP22cOkZKE",
  authDomain: "medicine-d770a.firebaseapp.com",
  projectId: "medicine-d770a",
  storageBucket: "medicine-d770a.appspot.com",
  messagingSenderId: "393932167733",
  appId: "1:393932167733:web:0ce6cd431722b27213ef7c",
  measurementId: "G-CXSDK2430W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const DBvariables = {
  app,
  db,
  auth,
  analytics,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

export default DBvariables;