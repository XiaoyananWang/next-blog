// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.FIREBASE,
  authDomain: "blog-system-testing.firebaseapp.com",
  projectId: "blog-system-testing",
  storageBucket: "blog-system-testing.appspot.com",
  messagingSenderId: "943567676134",
  appId: "1:943567676134:web:ad224016114431c27f1127"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);