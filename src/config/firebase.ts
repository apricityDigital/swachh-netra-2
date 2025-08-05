import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfHhxPGKwXM1K1OSHh7o0BBs-bvtIrqnM",
  authDomain: "bingoz-app.firebaseapp.com",
  projectId: "bingoz-app",
  storageBucket: "bingoz-app.firebasestorage.app",
  messagingSenderId: "820389310142",
  appId: "1:820389310142:web:99367393a057aef085f8ef",
  measurementId: "G-Z35GQ56VDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;