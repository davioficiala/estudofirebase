// Conecta o site ao projeto Firebase
const app = initializeApp(firebaseConfig);

// Abre acesso ao banco de dados Firestore
const db = getFirestore(app)

// Salva ou substitui um documento
await setDoc(
  doc(db, "usuarios", "usuario1"),
  {
    nome: "Davi",
    saldo: 2000
  }
);


// Busca um documento do banco
getDoc()

// Atualiza campos de um documento existente
updateDoc()

// Cria um documento com ID gerado automaticamente
addDoc()
