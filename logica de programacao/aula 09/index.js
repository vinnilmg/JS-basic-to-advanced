// try: executado quando não há erros.
// catch: executado quando há erros.
// finally: sempre é executado.

// tratando exceptions
try {
    console.log(naoExisto);
} catch (e) {
    console.log('Erro:', e);
}

// lançando exceptions
const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        //throw('Valores precisam ser números.');
        throw new Error('Valores precisam ser números.');
    }
    return x + y;
};

try {
    console.log(soma("p", 5));
} catch(err) {
    console.log("Error:", err);
} finally {
    console.log('Eu executo sempre');
}