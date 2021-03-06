import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSWvKMmUUlWLFBZnmyHKNf0WACLNcQMOY",
  authDomain: "m-city-7438c.firebaseapp.com",
  databaseURL: "https://m-city-7438c.firebaseio.com",
  projectId: "m-city-7438c",
  storageBucket: "m-city-7438c.appspot.com",
  messagingSenderId: "627911796525",
  appId: "1:627911796525:web:c67bc39f9ed4746b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.database();

const firebaseMatches = firebaseDb.ref("matches");
const firebasePromotions = firebaseDb.ref("promotions");
const firebaseTeams = firebaseDb.ref("teams");
const firebasePlayers = firebaseDb.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDb,
  firebasePlayers
};
