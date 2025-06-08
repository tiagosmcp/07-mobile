// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqHlqbSuwsu-sbat-Nl4sZcwOgsiMKZ3c",
  authDomain: "apppiunipam-5d7c2.firebaseapp.com",
  projectId: "apppiunipam-5d7c2",
  storageBucket: "apppiunipam-5d7c2.firebasestorage.app",
  messagingSenderId: "804137864608",
  appId: "1:804137864608:web:b72f566d996f36368628c5"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
