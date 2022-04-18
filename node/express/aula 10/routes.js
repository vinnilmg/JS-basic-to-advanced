const express = require('express');
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

const route = express.Router();

function meuMiddlewareAntes(req, res, next) {
    console.log('Passei no meuMiddlewareAntes()');
    req.session = { nome: 'Vinicius LIMA' }; // criando objeto na requisicao
    next();
};

function meuMiddlewareApos(req, res, next) {
    console.log('Passei no meuMiddlewareApos()');
    console.log(req.session); // pegando objeto da requisicao
    next();
};

// Rotas da home
route.get('/', meuMiddlewareAntes, homeController.paginaInicial, meuMiddlewareApos); // middleware 1 -> controller -> middleware 2
route.post('/', homeController.envioFormulario);

// Rotas de contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;
