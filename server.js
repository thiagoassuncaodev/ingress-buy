const express = require('express');
const app = express();
const path = require('path');

// Esta linha faz o servidor "entregar" seu HTML, CSS e JS do Halloween
app.use(express.static(path.join(__dirname, 'public')));

// ... resto do código do Stripe aqui ...

app.listen(3000, () => {
    console.log("Servidor assombrado rodando em http://localhost:3000 🎃");
});