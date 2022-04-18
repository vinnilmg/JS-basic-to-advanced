const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (req, res, next) => {
    console.log('Criando sessão do usuário e exibindo flash messages...');

    // criando objeto na session
    req.session.usuario = { nome: 'Vinicius', senha: '123', logado: true };
    console.log(req.session.usuario);

    // flash messages
    req.flash('info', 'Olá mundo');
    req.flash('error', 'Olá mundo com error');
    req.flash('success', 'Olá mundo com sucesso');

    // exibir mensagens
    console.log(
        req.flash('info'), 
        req.flash('error'), 
        req.flash('success')
    );

    res.render('index');
    next();
};

exports.envioFormulario = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};