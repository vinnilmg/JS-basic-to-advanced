exports.paginaInicial = (req, res, next) => {
    res.render('index');
    next();
};

exports.envioFormulario = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};