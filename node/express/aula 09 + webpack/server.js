const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

// para tratar parametros recebidos via body
app.use(express.urlencoded({ extended: true }));

// configuracoes views
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// para utilizar as rotas definidas no arquivo routes
app.use(routes); 

// utilizar conteúdo estatico
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Servidor rodando na porta 3000 -> URL: http://localhost:3000/'));