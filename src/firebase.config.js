// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Xo2hm8rsxYP_b62H_4Z1r_6gwChgHmQ",
  authDomain: "food-wave-dba6f.firebaseapp.com",
  projectId: "food-wave-dba6f",
  storageBucket: "food-wave-dba6f.appspot.com",
  messagingSenderId: "619187295551",
  appId: "1:619187295551:web:e2eca8ffc40d6668bc6f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;