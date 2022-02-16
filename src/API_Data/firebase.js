import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdG1sYtdCwow9iM0cOKoGJgWwgRAfJ2Sw",
  authDomain: "firestore-crud-todo-59640.firebaseapp.com",
  projectId: "firestore-crud-todo-59640",
  storageBucket: "firestore-crud-todo-59640.appspot.com",
  messagingSenderId: "46035622118",
  appId: "1:46035622118:web:d13726ce46bf3514954327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };