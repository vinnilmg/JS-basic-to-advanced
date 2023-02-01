const { alfabeto } = require('./base');

/* Conjuntos []
[abc]: encontra o conjunto a b c
[^] -> negação

Ranges
-> sempre enviar do menor para o maior
[min-maxQLQCOISA]

[0-9]
[a-z]
[a-zA-Z-0-9]
[\u00A0-\u00BA] (range de unicode -> encontra letras com acentos)

Atalhos:
\w -> [a-zA-Z-0-9]
\W -> [^a-zA-Z-0-9]
\d -> [0-9]
\D -> [^0-9]
\s -> encontra espaços em branco
\S -> encontra tudo menos os espaços
*/

console.log(alfabeto.match(/[abc]/g)); // encontra os caracteres separados
console.log(alfabeto.match(/[abc]+/g)); // encontra junto
console.log(alfabeto.match(/[abc123]+/g)); // encontra junto 2 conjuntos
console.log(alfabeto.match(/[^abc123]/g)); // encontra tudo que nao estiver nos 2 conjuntos
console.log(alfabeto.match(/[0-9]/g)); // encontra do 0 ao 9
console.log(alfabeto.match(/[a-m]+/g)); // encontra a sequencia do a ao m
console.log(alfabeto.match(/[a-zA-Z-0-9]+/g)); // encontra 3 conjuntos a-z A-Z 0-9
console.log(alfabeto.match(/[^a-zA-Z-0-9]+/g)); // encontra tudo diferente dos conjuntos a-z A-Z 0-9
console.log(alfabeto.match(/[a-zA-Z-0-9çã]+/g)); // encontra os 3 conjuntos + ç + ã
console.log(alfabeto.match(/\w+/g)); // encontra 3 conjuntos a-z A-Z 0-9
console.log(alfabeto.match(/\W/g)); // encontra tudo menos os conjuntos a-z A-Z 0-9
console.log(alfabeto.match(/\d+/g)); // encontra do 0 ao 9
console.log(alfabeto.match(/\D+/g)); // encontra tudo menos do 0 ao 9
console.log(alfabeto.match(/\s+/g)); // encontra os espaços
console.log(alfabeto.match(/\S+/g)); // encontra tudo menos os espaços
