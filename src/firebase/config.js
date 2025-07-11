// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjqljvUt1VlZqzC3op_g4KqtCj7iUwmiA",
  authDomain: "fluent-c31ae.firebaseapp.com",
  projectId: "fluent-c31ae",
  storageBucket: "fluent-c31ae.firebasestorage.app",
  messagingSenderId: "163204439948",
  appId: "1:163204439948:web:a8c4fbf73021d0a91500a9",
  measurementId: "G-8R1B1499Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };