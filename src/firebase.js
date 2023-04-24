// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF27BmZCiCP2xEo_nCR-T9kwBosjkjA8M",
  authDomain: "react-chat-2b81e.firebaseapp.com",
  projectId: "react-chat-2b81e",
  storageBucket: "react-chat-2b81e.appspot.com",
  messagingSenderId: "25364970842",
  appId: "1:25364970842:web:60dd47e91f6c81ab7f0763",
  measurementId: "G-VGLQHLVBZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);