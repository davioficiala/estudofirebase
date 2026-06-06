import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "deus-fiel-7a2cc.firebaseapp.com",
  projectId: "deus-fiel-7a2cc",
  storageBucket: "deus-fiel-7a2cc.firebasestorage.app",
  messagingSenderId: "746071893459",
  appId: "1:746071893459:web:c7a31b6e8ad49709187b26"
};

// Conecta ao Firebase
const app = initializeApp(firebaseConfig);

// Conecta ao Firestore
const db = getFirestore(app);

// Salva teste
await setDoc(
  doc(db, "usuarios", "usuario1"),
  {
    nome: "Davi",
    saldo: 2000
  }
);

// Lê o documento
const documento = await getDoc(
  doc(db, "usuarios", "usuario1")
);

// Mostra na tela
if (documento.exists()) {
  document.getElementById("saldoDisponivel").innerText =
    "R$ " + documento.data().saldo;
}
