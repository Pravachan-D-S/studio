// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-8237587301-1d419",
  "appId": "1:367116739807:web:a877c27fe1698be0e0f56a",
  "storageBucket": "studio-8237587301-1d419.firebasestorage.app",
  "apiKey": "AIzaSyD4sWB5TIVNgFMCDFQVyEJ-WebgQq5EJ40",
  "authDomain": "studio-8237587301-1d419.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "367116739807"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


export { app, auth, db, googleProvider };
