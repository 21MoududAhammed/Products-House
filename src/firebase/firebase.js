// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEs2e_Q4MNZg8JBJ6Z6rTkhrnEr0cTor4",
  authDomain: "guestbook-4a04b.firebaseapp.com",
  projectId: "guestbook-4a04b",
  storageBucket: "guestbook-4a04b.appspot.com",
  messagingSenderId: "952980051558",
  appId: "1:952980051558:web:1d580858079669bc6abfa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export { auth };
