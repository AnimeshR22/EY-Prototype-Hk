import { initializeApp } from "firebase/app";

// Firebase configuration object (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBXco-PSNNRuMu70eNS5R4qtHjRbus_0ug",
    authDomain: "ey-techathon-fe4b2.firebaseapp.com",
    projectId: "ey-techathon-fe4b2",
    storageBucket: "ey-techathon-fe4b2.firebasestorage.app",
    messagingSenderId: "189815224185",
    appId: "1:189815224185:web:96fe7f6c2447129d05e1a8",
    measurementId: "G-VY8WFF450K"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
