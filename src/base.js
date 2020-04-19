import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


// const firebaseConfig = {
//   apiKey: "AIzaSyCOMuidIz53S_1_iW5isfoiy3J66QVp720",
//   authDomain: "dsc-covid-19.firebaseapp.com",
//   databaseURL: "https://dsc-covid-19.firebaseio.com",
//   projectId: "dsc-covid-19",
//   storageBucket: "dsc-covid-19.appspot.com",
//   messagingSenderId: "724650717987",
//   appId: "1:724650717987:web:1e96e61a05f00140a35296",
//   measurementId: "G-LJRVG3223S"
// };


const firebaseConfig = {
    apiKey: "AIzaSyC0VHH7O4lwTqyES-JC_6IdjqH3DvByqdM",
    authDomain: "cfd-covid.firebaseapp.com",
    databaseURL: "https://cfd-covid.firebaseio.com",
    projectId: "cfd-covid",
    storageBucket: "cfd-covid.appspot.com",
    messagingSenderId: "868334582219",
    appId: "1:868334582219:web:0dcc6ffc2b1e8a63b2de4e",
    measurementId: "G-9CN644PZG5"
};



export const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const storage = app.storage();
export const auth = app.auth();

export default app;




