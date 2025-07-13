// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add this

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fluent-c31ae.firebaseapp.com",
  projectId: "fluent-c31ae",
  storageBucket: "fluent-c31ae.appspot.com", // 🔧 Fix domain typo
  messagingSenderId: "163204439948",
  appId: "1:163204439948:web:a8c4fbf73021d0a91500a9",
  measurementId: "G-8R1B1499Y1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Initialize Firestore

// ✅ Export everything
export { app, analytics, auth, db };
