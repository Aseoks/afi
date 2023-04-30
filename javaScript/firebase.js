import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCY1kQyqtpQKqA51QXuruuNboE0BR3JRPc",
  authDomain: "adventure-for-impact.firebaseapp.com",
  projectId: "adventure-for-impact",
  storageBucket: "adventure-for-impact.appspot.com",
  messagingSenderId: "1088538321998",
  appId: "1:1088538321998:web:d4dba8c5f1ec59e5bb8f1f",
  measurementId: "G-NGL431KJHT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);