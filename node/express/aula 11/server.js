require('dotenv').config(); // para poder pegar as variaveis de ambiente

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const { middlewareGlobal1, } = require('./src/middlewares/middleware');

const app = express();

// Base de dados pegando connection string do arquivo .env
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Iniciei a base de dados.');
        app.emit('base iniciada'); // para iniciar o aplicativo somente quando conectar na base (emite sinal)
    })
    .catch(e => console.error(e));

/* MIDDLEWARES */
// para tratar parametros recebidos via body
app.use(express.urlencoded({ extended: true }));

// configuracoes views
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// utilizando meu middleware que criei
app.use(middlewareGlobal1);

// para utilizar as rotas definidas no arquivo routes
app.use(routes); 

// utilizar conteúdo estatico
app.use(express.static(path.join(__dirname, 'public')));

// vai iniciar o servidor somente quando o sinal for emitido
app.on('base iniciada', () => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000 -> URL: http://localhost:3000/'));
})
