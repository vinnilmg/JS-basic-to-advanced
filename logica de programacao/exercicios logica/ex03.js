const verificaDivisao3ou5 = (numero) => {
    let numeroFormatado = Number(numero);

    if (!numeroFormatado) {
        console.log("Variável informada não é um número.");
        return;
    } 

    let retorno = '';
    retorno += numero % 3 === 0 ? 'Fizz' : '';
    retorno += numero % 5 === 0 ? 'Buzz' : '';
    retorno += !retorno ? numero : '';

    return retorno;
};

verificaDivisao3ou5('p');

for (let i = 1; i <= 100; i++) {
    console.log(i, verificaDivisao3ou5(i));
}

