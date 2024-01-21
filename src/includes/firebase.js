import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHvkMYE6V22xiWyi3H6vCqnY48odr8cA4",
  authDomain: "music-project-69664.firebaseapp.com",
  projectId: "music-project-69664",
  storageBucket: "music-project-69664.appspot.com",
  messagingSenderId: "669577402521",
  appId: "1:669577402521:web:7541e24cd1c31267d88008",
  measurementId: "G-NTYNMDE670",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
