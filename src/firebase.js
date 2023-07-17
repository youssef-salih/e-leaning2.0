import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDz7Lwdf1aefMymlUYZe0ASfkpVTBdPf5I",
  authDomain: "e-learning-39179.firebaseapp.com",
  projectId: "e-learning-39179",
  storageBucket: "e-learning-39179.appspot.com",
  messagingSenderId: "23332444028",
  appId: "1:23332444028:web:40efa356c4a5fe77c3f6f9",
  measurementId: "G-E6R6KW2W3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
