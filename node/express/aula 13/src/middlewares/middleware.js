exports.middlewareGlobal1 = (req, res, next) => {
    // injetando em todas as respostas
    res.locals.variavelLocal = 'Estou nas respostas';
    next();
};