import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBajiT8OIjvFlLMvO6ebqlrUbOZC_N8bZA",
  authDomain: "black-friday-compras-6cd9c.firebaseapp.com",
  projectId: "black-friday-compras-6cd9c",
  storageBucket: "black-friday-compras-6cd9c.appspot.com",
  messagingSenderId: "431964921737",
  appId: "1:431964921737:web:69fe4bdbf8d2a1e8118b58",
  measurementId: "G-4E548TXMHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }
