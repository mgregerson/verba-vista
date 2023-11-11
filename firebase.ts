import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5HY02_35Xnkb8D-tQCFBXMGb0MV2Hpos",
  authDomain: "verba-vista.firebaseapp.com",
  projectId: "verba-vista",
  storageBucket: "verba-vista.appspot.com",
  messagingSenderId: "127900329539",
  appId: "1:127900329539:web:fc9706dcc1d92d7fed16f6",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
