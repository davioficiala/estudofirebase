// PASSO 1 - Importar Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// PASSO 2 - Importar Firestore
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

// PASSO 3 - Importar Authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  deleteUser
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
initializeApp(firebaseConfig);

// PASSO 6 - Abrir Firestore
getFirestore(app);

// PASSO 7 - Abrir Authentication
getAuth(app);

// PASSO 8 - Ler Documento
getDoc(docRef);




const documento = await getDoc(referencia);
document.getElementById("saldoDisponivel").innerText =
"R$ " + documento.data().saldoDisponivel;

document.getElementById("gastosHoje").innerText =
"R$ " + documento.data().gastosHoje;

document.getElementById("limiteDiario").innerText =
"R$ " + documento.data().limiteDiario;

document.getElementById("restanteHoje").innerText =
"R$ " + documento.data().restanteHoje;



// PASSO 9 - Salvar Documento
setDoc(docRef, dados);

// PASSO 10 - Atualizar Documento
updateDoc(docRef, dados);

// PASSO 11 - Adicionar Documento Automático
addDoc(collectionRef, dados);

// PASSO 12 - Excluir Documento
deleteDoc(docRef);

// PASSO 13 - Criar Usuário
createUserWithEmailAndPassword(auth, email, senha);

// PASSO 14 - Fazer Login
signInWithEmailAndPassword(auth, email, senha);

// PASSO 15 - Ver Usuário Logado
onAuthStateChanged(auth, (user) => {

});

// PASSO 16 - Atualizar Perfil
updateProfile(user, {
  displayName: "Nome"
});

// PASSO 17 - Sair da Conta
signOut(auth);

// PASSO 18 - Excluir Usuário
deleteUser(user);
