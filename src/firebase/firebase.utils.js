import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDEuL-PtBbm7gLr558XzMPN-onczAYVMGg',
  authDomain: 'crwn-db-68117.firebaseapp.com',
  databaseURL: 'https://crwn-db-68117.firebaseio.com',
  projectId: 'crwn-db-68117',
  storageBucket: 'crwn-db-68117.appspot.com',
  messagingSenderId: '835804516167',
  appId: '1:835804516167:web:8c6d47fb19d96d7c508662',
  measurementId: 'G-4TZWZWF5FT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
