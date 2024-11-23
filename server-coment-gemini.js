import express from "express";
// Importa o framework Express para criar a aplicação web

// Importa a função para conectar ao banco de dados, localizada em dbConfig.js
import conectarAoBanco from "./src/config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Cria uma instância do Express para iniciar a aplicação
const app = express();

// Habilita o middleware para lidar com requisições JSON
app.use(express.json());

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando.....");
});

// Função assíncrona para buscar todos os posts do banco de dados
async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes");

    // Obtém a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");

    // Retorna um array com todos os documentos (posts) da coleção
    return colecao.find().toArray();
};

