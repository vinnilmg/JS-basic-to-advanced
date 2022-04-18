const HomeModel = require('../models/HomeModel');

// cria objeto dentro do banco
HomeModel.create({
    titulo: 'teste',
    descricao: 'teste'
})
    .then(dados => console.log('Objeto criado:\n', dados))
    .catch(e => console.error(e));

// busca objetos no banco
HomeModel.find()
    .then(dados => console.log('Todos os Dados:\n', dados))
    .catch(e => console.error(e));
 
    
exports.paginaInicial = (req, res, next) => {
    res.render('index');
    next();
};

exports.envioFormulario = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};