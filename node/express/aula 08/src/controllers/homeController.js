exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.envioFormulario = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};