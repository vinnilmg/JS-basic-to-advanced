const express = require('express');
const routes = require('./routes');

const app = express();

// para tratar parametros recebidos via body
app.use(express.urlencoded({ extended: true }));

// para utilizar as rotas definidas no arquivo routes
app.use(routes); 

app.listen(3000, () => console.log('Servidor rodando na porta 3000 -> URL: http://localhost:3000/'));