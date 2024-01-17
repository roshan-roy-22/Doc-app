// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA2tZZOVB_P7c_JJeNnvmaMecuAEdwBBZo",
  authDomain: "doc-app-deab6.firebaseapp.com",
  projectId: "doc-app-deab6",
  storageBucket: "doc-app-deab6.appspot.com",
  messagingSenderId: "961632325826",
  appId: "1:961632325826:web:12aef2eb521af5585feb5b",
  measurementId: "G-X69MEW66ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)