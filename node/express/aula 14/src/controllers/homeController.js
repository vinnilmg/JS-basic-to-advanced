const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res) => {

    // Injetando dados no template
    res.render('index', {
        titulo: 'Titulo pagina Home',
        usuario: 'testes',
        numeros: [1, 2, 3, 4, 5]
    });
    return;
};

exports.envioFormulario = (req, res) => {
    console.log('Requisição:', req.body);
    res.send(req.body);
    return;
};