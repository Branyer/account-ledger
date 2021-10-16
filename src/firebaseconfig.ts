import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
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

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    // return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
// const analytics = getAnalytics(app);