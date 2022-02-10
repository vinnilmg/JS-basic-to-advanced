// Função auto-invocada
(function () {
    console.log("iniciei sozinha.");
})();

// com parametros
(function (...numeros) {
    console.log(numeros);
})(1, 5, 10);