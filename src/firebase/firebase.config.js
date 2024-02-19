// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1hzwK1iBWAGC_Ggxg8YzV7tiPzI4q2x8",
  authDomain: "logindeloquesea.firebaseapp.com",
  projectId: "logindeloquesea",
  storageBucket: "logindeloquesea.appspot.com",
  messagingSenderId: "549262409173",
  appId: "1:549262409173:web:7b3f81e55b12cbcef8d15c",
  measurementId: "G-WMC8ZXE5S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)