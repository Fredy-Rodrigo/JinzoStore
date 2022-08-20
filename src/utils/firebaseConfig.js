// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApS-1PcwQs99RY0o-PQ50syzJUcjJk5P8",
  authDomain: "jinzo-store-ea2de.firebaseapp.com",
  projectId: "jinzo-store-ea2de",
  storageBucket: "jinzo-store-ea2de.appspot.com",
  messagingSenderId: "11578364019",
  appId: "1:11578364019:web:b9a7a774100e26964d5a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;