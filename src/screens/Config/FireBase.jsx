// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import App from "../../../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLZ5oQuxCJvV2d3QqJNXEiKdeVMdsVbQM",
  authDomain: "begins-c3fd5.firebaseapp.com",
  projectId: "begins-c3fd5",
  storageBucket: "begins-c3fd5.appspot.com",
  messagingSenderId: "1081204046823",
  appId: "1:1081204046823:web:31f59f5111eaa87b201b42",
  measurementId: "G-K5KG8GKPXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(App);