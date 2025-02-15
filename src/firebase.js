// Importation des fonctions Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase (REMPLACE ICI AVEC TA NOUVELLE CLÉ API)
const firebaseConfig = {
  apiKey: "AIzaSyDwFMd3ZGtUlsaPBMxjuyfNoK2rqpuLIUo",
  authDomain: "eterna-22950.firebaseapp.com",
  projectId: "eterna-22950",
  storageBucket: "eterna-22950.appspot.com",
  messagingSenderId: "369353616071",
  appId: "1:369353616071:web:33d7d199f7105b2377ece2",
  measurementId: "G-TPF7G6GMB7"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
