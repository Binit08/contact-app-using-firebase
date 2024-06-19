// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXut7PwCxY6IuD77LdAK5u9m9Ij_6eRLg",
  authDomain: "vite-5.firebaseapp.com",
  projectId: "vite-5",
  storageBucket: "vite-5.appspot.com",
  messagingSenderId: "244733527551",
  appId: "1:244733527551:web:44f8e7426f1f2f11d313ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)