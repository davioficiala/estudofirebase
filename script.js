// PASSO 1 - Importar Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// PASSO 2 - Importar Firestore
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// PASSO 3 - Importar Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// PASSO 4 - Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdirRN9nHaekNUjM3upyPTSBRVollrlMI",
  authDomain: "deus-fiel-7a2cc.firebaseapp.com",
  projectId: "deus-fiel-7a2cc",
  storageBucket: "deus-fiel-7a2cc.firebasestorage.app",
  messagingSenderId: "746071893459",
  appId: "1:746071893459:web:c7a31b6e8ad49709187b26"
};

// PASSO 5 - Iniciar Firebase
const app = initializeApp(firebaseConfig);

// PASSO 6 - Abrir Firestore
const db = getFirestore(app);

// PASSO 7 - Abrir Authentication
const auth = getAuth(app);

// PASSO 8 - Referência do Documento
const docRef = doc(db, "teste", "usuarios");

// PASSO 9 - Ler Documento
const documento = await getDoc(docRef);

if (documento.exists()) {

  document.getElementById("saldoDisponivel").innerText =
    "R$ " + documento.data().saldoDisponivel;

  document.getElementById("gastosHoje").innerText =
    "R$ " + documento.data().gastosHoje;

  document.getElementById("limiteDiario").innerText =
    "R$ " + documento.data().limiteDiario;

  document.getElementById("restanteHoje").innerText =
    "R$ " + documento.data().restanteHoje;

} else {

  document.getElementById("saldoDisponivel").innerText = "R$ 0";
  document.getElementById("gastosHoje").innerText = "R$ 0";
  document.getElementById("limiteDiario").innerText = "R$ 0";
  document.getElementById("restanteHoje").innerText = "R$ 0";

  console.log("Documento não encontrado");

}

// PASSO 10 - Criar Conta

document.getElementById("btnCadastrar")
.addEventListener("click", async () => {

  try {

    const nome =
      document.getElementById("nome").value;

    const email =
      document.getElementById("email").value;

    const senha =
      document.getElementById("senha").value;

    const usuario =
      await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

    await updateProfile(usuario.user, {
      displayName: nome
    });

    document.getElementById("statusAuth").innerText =
      "✅ Conta criada com sucesso";

  } catch (erro) {

    document.getElementById("statusAuth").innerText =
      erro.message;

  }

});

// PASSO 11 - Login

document.getElementById("btnLogin")
.addEventListener("click", async () => {

  try {

    const email =
      document.getElementById("email").value;

    const senha =
      document.getElementById("senha").value;

    await signInWithEmailAndPassword(
      auth,
      email,
      senha
    );

    document.getElementById("statusAuth").innerText =
      "✅ Login realizado";

  } catch (erro) {

    document.getElementById("statusAuth").innerText =
      erro.message;

  }

});
