import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD6zQCw1l4QLt-ln4EIoe8RjS2wfu2wLjY",
    authDomain: "zaman-hackathon-project.firebaseapp.com",
    projectId: "zaman-hackathon-project",
    storageBucket: "zaman-hackathon-project.appspot.com",
    messagingSenderId: "1016441536945",
    appId: "1:1016441536945:web:5da899fd848757da0afd90",
    measurementId: "G-8LTS01JHEX"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth()