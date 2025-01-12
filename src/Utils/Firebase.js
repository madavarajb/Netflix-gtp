// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlvwdbS0ltNwgURg9QagmDFA0Pg9VLDEA",
  authDomain: "netflixgtp-5b814.firebaseapp.com",
  projectId: "netflixgtp-5b814",
  storageBucket: "netflixgtp-5b814.firebasestorage.app",
  messagingSenderId: "943662118",
  appId: "1:943662118:web:df714fd1f063eb9588f2e7",
  measurementId: "G-JKCVZ5SCFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
