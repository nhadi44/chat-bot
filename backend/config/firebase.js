import {initializeApp} from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJxtu24k3RRabZ5iY8893yGEVvJz02Gps",
    authDomain: "chat-bot-d0ac6.firebaseapp.com",
    projectId: "chat-bot-d0ac6",
    storageBucket: "chat-bot-d0ac6.appspot.com",
    messagingSenderId: "646981056375",
    appId: "1:646981056375:web:fd0139ab5ce3e0bb639372",
    measurementId: "G-Q2T7ZYPGCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const testCollection = collection(db, 'test')

export default testCollection;
