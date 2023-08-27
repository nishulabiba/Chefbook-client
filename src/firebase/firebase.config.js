// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe6cK29myVtrzqbuLhUOQkvuqYvU9g4dw",
  authDomain: "chefbook-89446.firebaseapp.com",
  projectId: "chefbook-89446",
  storageBucket: "chefbook-89446.appspot.com",
  messagingSenderId: "110538925234",
  appId: "1:110538925234:web:71a8c8256bdfc0392555ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;
