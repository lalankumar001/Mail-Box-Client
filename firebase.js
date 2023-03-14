// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9cpzH-OMZWpbP4s1h7R4faF7FsOC5K2w",
  authDomain: "expensetracker-30ad5.firebaseapp.com",
  databaseURL: "https://expensetracker-30ad5-default-rtdb.firebaseio.com",
  projectId: "expensetracker-30ad5",
  storageBucket: "expensetracker-30ad5.appspot.com",
  messagingSenderId: "640540006906",
  appId: "1:640540006906:web:f50be72edce8a21ffc6c43"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
export {auth};