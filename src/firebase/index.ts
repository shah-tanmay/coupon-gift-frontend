// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQVRybQ0sd2-Y3T1_EFd8r5aQlUW5uSk",
  authDomain: "coupon-gift-1e995.firebaseapp.com",
  projectId: "coupon-gift-1e995",
  storageBucket: "coupon-gift-1e995.appspot.com",
  messagingSenderId: "282077103437",
  appId: "1:282077103437:web:ef61e24b2e5407449e2304",
  measurementId: "G-KMZ08BZQ4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
