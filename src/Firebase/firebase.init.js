// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nnTceiJ0OImufSo4_e_gEBmtwBlHjLg",
  authDomain: "visa-navigator-c69eb.firebaseapp.com",
  projectId: "visa-navigator-c69eb",
  storageBucket: "visa-navigator-c69eb.firebasestorage.app",
  messagingSenderId: "172953321309",
  appId: "1:172953321309:web:b9ce453617d1526511b2b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
