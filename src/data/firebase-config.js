import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebase_app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
});

// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
// export const twitterProvider = new firebase.auth.TwitterAuthProvider();
// export const githubProvider = new firebase.auth.GithubAuthProvider();
// export const phoneProvider = new firebase.auth.GithubAuthProvider();

export const db = firebase.firestore();
