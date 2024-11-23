
import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

// Rota para buscar dados do arquivo JSON
app.get('/livros', (req, res) => {
    fs.readFile('livro.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo JSON');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});