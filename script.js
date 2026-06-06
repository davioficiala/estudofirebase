// Conecta o site ao projeto Firebase
const app = initializeApp(firebaseConfig);

// Abre acesso ao banco de dados Firestore
const db = getFirestore(app);

// Salva ou substitui um documento
await setDoc(
  doc(db, "usuarios", "usuario1"),
  {
    nome: "Davi",
    saldo: 2000
  }
);

console.log("Documento salvo!");

// Busca um documento do banco
const documento = await getDoc(
  doc(db, "usuarios", "usuario1")
);

// Mostra o saldo na tela
if (documento.exists()) {

  document.getElementById("saldoDisponivel").innerText =
    "R$ " + documento.data().saldo;

  console.log(documento.data());

}

// Atualiza campos de um documento existente
await updateDoc(
  doc(db, "usuarios", "usuario1"),
  {
    saldo: 2500
  }
);

console.log("Documento atualizado!");

// Cria um documento com ID gerado automaticamente
await addDoc(
  collection(db, "usuarios"),
  {
    nome: "Maria",
    saldo: 1500
  }
);

console.log("Documento criado com ID automático!");
