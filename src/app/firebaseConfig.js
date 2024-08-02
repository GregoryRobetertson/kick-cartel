// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeJTvlnWvDLUwF7d_n96P3eJQ8Hy8LQCk",
  authDomain: "kick-cartel.firebaseapp.com",
  projectId: "kick-cartel",
  storageBucket: "kick-cartel.appspot.com",
  messagingSenderId: "94790528554",
  appId: "1:94790528554:web:0b9e1dbab14ac51ba71d53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);