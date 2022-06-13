// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrA-Utj_EsjnYMZrdBmHz1x7WdydIg1Os",
  authDomain: "myschool-28253.firebaseapp.com",
  projectId: "myschool-28253",
  storageBucket: "myschool-28253.appspot.com",
  messagingSenderId: "797683087718",
  appId: "1:797683087718:web:2b46365ee8ebfb252630a7",
  measurementId: "G-S0M8RWJ7X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);