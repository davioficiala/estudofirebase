
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
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

// Busca o documento
const documento = await getDoc(
  doc(db, "teste", "usuarios")
);

// Mostra o valor na tela
if (documento.exists()) {

  document.getElementById("saldoDisponivel").innerText =
    documento.data().saldoDisponivel.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

} else {

  console.log("Documento não encontrado");

}
