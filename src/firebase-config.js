// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqv8gl3vqhgLtLNDg_YFb7Be2OQLUXnSg",
  authDomain: "react-firebase-1f7dd.firebaseapp.com",
  projectId: "react-firebase-1f7dd",
  storageBucket: "react-firebase-1f7dd.appspot.com",
  messagingSenderId: "353097994750",
  appId: "1:353097994750:web:1636f8b0f1f351177b30af",
  measurementId: "G-M691ZT7XGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);