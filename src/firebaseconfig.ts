import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC37gWdgvj6vynPbZ5ryyG4JlT5VmONSqI",
  authDomain: "account-ledger-206f1.firebaseapp.com",
  projectId: "account-ledger-206f1",
  storageBucket: "account-ledger-206f1.appspot.com",
  messagingSenderId: "750792796022",
  appId: "1:750792796022:web:57786bc2a3312dce75bc57",
  measurementId: "G-FEJVREJEKP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);