import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

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
