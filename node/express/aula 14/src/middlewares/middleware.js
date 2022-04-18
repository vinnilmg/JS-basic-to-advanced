exports.middlewareGlobal1 = (req, res, next) => {
    // injetando em todas as respostas
    res.locals.variavelLocal = 'Estou nas respostas';
    next();
};

exports.checkCSRFError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        console.log(err);
        res.render('error'); // renderizando pagina de erro para nao exibir o erro na tela
    }
};

exports.CSRFTokenMiddleware = (req, res, next) => {
    // Enviando token pra todas as requisições
    res.locals.csrfToken = req.csrfToken();
    next();
};