// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd33TA3g42r_u0cAIX2XX62YkaU0cth-Q",
  authDomain: "react-ec-a2e45.firebaseapp.com",
  projectId: "react-ec-a2e45",
  storageBucket: "react-ec-a2e45.appspot.com",
  messagingSenderId: "826057282143",
  appId: "1:826057282143:web:140db784ece80f1e7c81ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)