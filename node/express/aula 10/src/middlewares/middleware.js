exports.middlewareGlobal1 = (req, res, next) => {
    console.log('Sou um middleware que todas as requisições vão passar!');
    next();
};