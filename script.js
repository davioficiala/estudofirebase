// 1 - Importações
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  deleteUser
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// 2 - Configuração
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};


// 3 - Inicializar Firebase
const app = initializeApp(firebaseConfig);


// 4 - Abrir serviços
const db = getFirestore(app);
const auth = getAuth(app);


// 5 - Usar funções
getDoc(docRef);
setDoc(docRef, dados);
updateDoc(docRef, dados);

createUserWithEmailAndPassword(auth, email, senha);
signInWithEmailAndPassword(auth, email, senha);

signOut(auth);
