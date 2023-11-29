import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBrbkJ217bZfX9vlr-6HoHUykZB7JTduTo",
  authDomain: "last-exam-9c564.firebaseapp.com",
  projectId: "last-exam-9c564",
  storageBucket: "last-exam-9c564.appspot.com",
  messagingSenderId: "522442785297",
  appId: "1:522442785297:web:7dbea41bb43237dd4b67b0",
  measurementId: "G-HML0GQNLD9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, app, db }