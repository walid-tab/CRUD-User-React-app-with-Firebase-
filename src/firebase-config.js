import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVtjofvcWfLzDhOY67TKsFao46Bd2a9js",
  authDomain: "fir-user-app-61d38.firebaseapp.com",
  projectId: "fir-user-app-61d38",
  storageBucket: "fir-user-app-61d38.appspot.com",
  messagingSenderId: "315338932269",
  appId: "1:315338932269:web:5e6a8b874833c8d92178a4",
  measurementId: "G-T4TNK6CD93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
