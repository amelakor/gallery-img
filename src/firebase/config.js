import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8Xlx3tVqRiRg1U5mubHFUrifZBGMZN-4",
  authDomain: "gallery-project-7d5a6.firebaseapp.com",
  databaseURL: "https://gallery-project-7d5a6.firebaseio.com",
  projectId: "gallery-project-7d5a6",
  storageBucket: "gallery-project-7d5a6.appspot.com",
  messagingSenderId: "112910416054",
  appId: "1:112910416054:web:82ae1de5efd10bc8240e17",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
