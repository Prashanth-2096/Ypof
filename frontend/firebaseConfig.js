// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ4cpbvWcT-nVTKCgMRBeUboGiioOzZNQ",
  authDomain: "ypof-new.firebaseapp.com",
  projectId: "ypof-new",
  storageBucket: "ypof-new.firebasestorage.app",
  messagingSenderId: "173165025046",
  appId: "1:173165025046:web:600322089fda7f90faa237",
  measurementId: "G-VBLQDFD73D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);