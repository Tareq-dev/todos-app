import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3Qfy9ryDzI3N_KjmNbZAwxbuzt2NseY",
  authDomain: "todo-list-50232.firebaseapp.com",
  projectId: "todo-list-50232",
  storageBucket: "todo-list-50232.appspot.com",
  messagingSenderId: "464697849229",
  appId: "1:464697849229:web:b53117dd759629100cb9c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
