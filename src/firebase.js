import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJAxao8Em4hZvdcu4B019TID1KX9ho1UA",
  authDomain: "badminton-a40da.firebaseapp.com",
  projectId: "badminton-a40da",
  storageBucket: "badminton-a40da.appspot.com",
  messagingSenderId: "30474962270",
  appId: "1:30474962270:web:7c74ca3e122e15c40d3bcf",
  measurementId: "G-F8JEJ29JCX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };