// ✅ Firebase SDK Load करो
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// ✅ Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAq_XRxEI6E1Cm9BgXXT3FJmHxYOXMOPBM",
    authDomain: "clcub-90520.firebaseapp.com",
    projectId: "clcub-90520",
    storageBucket: "clcub-90520.firebasestorage.app",
    messagingSenderId: "242875704536",
    appId: "1:242875704536:web:3bc7eb43184ea821d723ad"
};

// ✅ Firebase Initialize करो
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Firebase Authentication को Global Variable बनाओ
window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;
