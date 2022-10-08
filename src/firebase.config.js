import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKW0vu0g6D34aTQ1ss2M5syFazdNOsMI4",
  authDomain: "maltimart-88469.firebaseapp.com",
  projectId: "maltimart-88469",
  storageBucket: "maltimart-88469.appspot.com",
  messagingSenderId: "471836331896",
  appId: "1:471836331896:web:65fdd0140fa6c2b58d428d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
