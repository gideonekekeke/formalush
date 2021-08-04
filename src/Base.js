import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBBQ9f4ytI1lcQIEhU2dMWKSEpqTwm5rVI",
  authDomain: "udemekitchen.firebaseapp.com",
  projectId: "udemekitchen",
  storageBucket: "udemekitchen.appspot.com",
  messagingSenderId: "781589858838",
  appId: "1:781589858838:web:c5e10ff1d22178d4cb0337",
});
