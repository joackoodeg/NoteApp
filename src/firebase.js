// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD-K5X-4GPDrN2iWPFVHMQ3SctwiUTM3k",
  authDomain: "react-notes-e81da.firebaseapp.com",
  projectId: "react-notes-e81da",
  storageBucket: "react-notes-e81da.appspot.com",
  messagingSenderId: "211313584310",
  appId: "1:211313584310:web:ac52464773e11d6aac1e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");