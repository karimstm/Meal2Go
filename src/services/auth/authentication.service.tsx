import firebase from "firebase";

export const loginRequest = (email: string, password: string) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
