import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoO6EVTn0osKXJVsacqE5KwnTqF_3LuY0",
    authDomain: "chat-app-1eea4.firebaseapp.com",
    projectId: "chat-app-1eea4",
    storageBucket: "chat-app-1eea4.appspot.com",
    messagingSenderId: "611578431038",
    appId: "1:611578431038:web:583063b3046f2c5ff3336f",
    measurementId: "G-MYY7EPC2FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, auth, analytics };
export default app;