function random () {
    return Math.floor(Math.random() * (10 - 1) * 1);
}

// WHILE: enquanto (primeira checa e depois executa)
// DO WHILE: faça enquanto (executa e depois checa)

let i = 0; 
while (i <= 10) {
    console.log(i);
    i++;
}

i = 0;
let nome = 'vinicius';
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

i = 0;
let variavelControle = false;
while (!variavelControle) {
    variavelControle = i === 9 ? true : false; 
    console.log(i);
    i++;
}
console.log('######');

let valor = 0;
do {
    valor = random();
    console.log(valor);
} while (valor !== 7);