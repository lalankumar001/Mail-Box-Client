// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDIEbP1BghSFf7Yl2Gx9HM2uAvUVTdGLQ",
  authDomain: "clientmailbox-87dff.firebaseapp.com",
  projectId: "clientmailbox-87dff",
  storageBucket: "clientmailbox-87dff.appspot.com",
  messagingSenderId: "905500628180",
  appId: "1:905500628180:web:6e0e3680c0815f7f94d741"  
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
export {auth};
const storage = getStorage(app);
export {storage};