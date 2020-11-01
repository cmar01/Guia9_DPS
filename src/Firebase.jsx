import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAKurFs00kz-bWcBw5Ge3PprzIGfqHZqiU",
  authDomain: "crudreactfirebase-a90f4.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-a90f4.firebaseio.com",
  projectId: "crudreactfirebase-a90f4",
  storageBucket: "crudreactfirebase-a90f4.appspot.com",
  messagingSenderId: "987390936806",
  appId: "1:987390936806:web:91b5c3071388ae161e1d27"
};
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

