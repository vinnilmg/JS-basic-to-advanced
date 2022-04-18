const express = require('express');
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

const route = express.Router();

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.envioFormulario);

// Rotas de contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;
