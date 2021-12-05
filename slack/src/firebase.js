import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDoUWCOpym43PzCV95ojMi3LqmGkz28y2U",
  authDomain: "slack-clone-f7754.firebaseapp.com",
  projectId: "slack-clone-f7754",
  storageBucket: "slack-clone-f7754.appspot.com",
  messagingSenderId: "796890800778",
  appId: "1:796890800778:web:106f1097b29bb409e08373",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
