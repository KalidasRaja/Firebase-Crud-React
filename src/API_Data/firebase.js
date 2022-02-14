import firebase from "firebase/app";
// import { getDatabase , ref, child, get } from "firebase/database";
import "firebase/database";

const firebaseConfig  = {
  apiKey: "AIzaSyClmnvt5f2dTfxO22C_1ElNmtwIV6bnKYQ",
  authDomain: "fir-crud-react-ab913.firebaseapp.com",
  projectId: "fir-crud-react-ab913",
  storageBucket: "fir-crud-react-ab913.appspot.com",
  messagingSenderId: "905044831577",
  appId: "1:905044831577:web:0469a554beab1a71593048"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);
export default firebaseDb.database().ref();




// // firebase.initializeApp(firebaseConfig);
// // const databaseRef = firebase.database().ref();
// // export const notesRef = databaseRef.child("notes")
// // export default firebase





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBn5UdXStZ6q-cdXcEy0psFAFU4z7v7J8U",
//   authDomain: "fir-form-6fd9d.firebaseapp.com",
//   projectId: "fir-form-6fd9d",
//   storageBucket: "fir-form-6fd9d.appspot.com",
//   messagingSenderId: "250056787507",
//   appId: "1:250056787507:web:913c7f6035a03f5e808546",
//   measurementId: "G-TLTV1CG3JK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const firebaseDb = getAnalytics(app);

// export default firebaseDb;