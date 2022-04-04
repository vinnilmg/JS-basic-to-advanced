// Promisses => executa em paralelo
// new Promise((resolve, reject) => {});
// .then() é executado quando chamar o resolve();
// .catch() é executado quando chamar o reject();

function aguardar(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Mensagem deve ser string!')); // chama o catch

        setTimeout(() => {
            resolve(msg + " PASSEI NA PROMISE"); // chama o then
        }, tempo);
    });
}

/*aguardar('Teste 1', 3000)
    .then(resp => { 
        console.log(resp); // resp é o que foi retornado no "resolve()"
        return aguardar('Teste 2', 1000); // vai executar o teste 2 somente depois que o teste 1 finalizar
    })
    .then(resp => { 
        console.log(resp); 
        return aguardar('Teste 3', 2000);
    })
    .then(resp => { 
        console.log(resp); 
    })
    .then(() => { 
        console.log('Finalizado.');
    })
    .catch(msg => { 
        console.log(msg);
    });*/

console.log("Sou o primeiro a executar."); // executa primeiro que todos (async)

// Promise.all => executa varias promises na ordem do array, se der erro retorna só o erro
const promises = [
    'Não é promise',
    aguardar('Promise 1', 3000),
    aguardar('Promise 2', 1000),
    aguardar('Promise 3', 2000),
    'Não sou Promise 2'
];

/*Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });*/

// Promise.race => retorna o valor da promise que resolver primeiro 
// precisa ser uma promise senão ele sempre vai retornar o que não é promise
const promises2 = [
    aguardar('Promise 1', 3000),
    aguardar('Promise 2', 1000), // é a retornada pelo race
    aguardar('Promise 3', 2000),
];

Promise.race(promises2)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });

// Promise.resolve => retorna promessa resolvida
// Promise.reject => retorna promesse rejeitada