import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyCNQkQ7ZxKLD9k1TEicWm9zhdTRddee30Q",
authDomain: "line-clone2-46cd3.firebaseapp.com",
projectId: "line-clone2-46cd3",
storageBucket: "line-clone2-46cd3.appspot.com",
messagingSenderId: "769963116148",
appId: "1:769963116148:web:7e9b1031229b7913fdf321",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
