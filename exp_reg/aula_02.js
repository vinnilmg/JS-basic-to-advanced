/*
Métodos String
match
replace
*/

const { texto } = require('./base');

const regExp1 = /Vini|maria/gi;

// Retorna todas as ocorrencias
console.log(texto.match(regExp1));

// Substituindo todos (g) valores
console.log(texto.replace(regExp1, 'Roberval'));

// Replace com groups (habilita o índice) -> ($1)($2)($3)...
console.log(texto.replace(/(vini|maria)/gi, '<p>$1</p>')); // insere tags entre os valores
console.log(
  texto.replace(/(vini|maria)/gi, function (input) {
    return 'ALTERADO:' + input.toUpperCase();
  })
);
