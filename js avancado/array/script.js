// Utilizando filter, map e reduce de uma vez só
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retorne a soma do dobro de todos os pares
const somaDobroDosPares = numeros
    .filter(valor => valor % 2 === 0) // seleciona os pares
    .map(valor => valor * 2) // dobra os valores
    .reduce((ac, valor) => ac += valor); // realiza a soma de todos os valores

console.log('Soma do dobro de todos os números pares:', somaDobroDosPares);

// ForEach
// disponível apenas para Arrays
// recebe valor, indice e array completo

let total = 0;
numeros.forEach(valor => total += valor);
console.log('Total:', total);