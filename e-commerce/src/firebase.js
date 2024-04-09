// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIOi3-Ov_EscDQCn_lpEjFCZflW3uDVZ8",
    authDomain: "clone-e045d.firebaseapp.com",
    projectId: "clone-e045d",
    storageBucket: "clone-e045d.appspot.com",
    messagingSenderId: "523065223268",
    appId: "1:523065223268:web:1790ec214ed00a9d541771",
    measurementId: "G-T7W1715CND"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export{db,auth};