const { texto, files } = require('./base');

/*
. => representa qualquer caractere
\ => caractere de escape

Quantificadores

* (opcional) 0 ou n (existe 1 ou vários ou nao existe) {0,}
+ (obrigatório) 1 ou n (existe pelo menos 1) {1,}
? (opcional) 0 ou 1 (existe 1 vez ou nao existe) {0,1}
{min, max} definir entre as chaves a quantidade minima e maxima que o caractere vai aparecer
Exemplos:
- {10,} no mínimo 10
- {,10} de 0 a 10
- {5,10} de 5 a 10
- {10} tem que ter 10  
*/

// +
const regExp1 = /Vin+i/gi; // 1 'N' ou MAIS
const regExp2 = /Vi+n+i+/gi; // 1 'I' e 'N' ou MAIS

console.log(texto.match(regExp1));
console.log(texto.match(regExp2));

// ?
const regExp3 = /\.jpe?g/gi; // Localiza .JPG e .JPEG (o 'E' nao é obrigatório)

for (const arquivo of files) {
  console.log(arquivo, arquivo.match(regExp3) ?? 'Nao localizado!!');
}

// *
const regExp4 = /\.jpe*g/;
const texto1 = 'teste.jpeeeeg';
console.log(texto1.match(regExp4));

// {min, max}
const regExp5 = /\.jpe{0,4}g/gi;
console.log(texto1.match(regExp5));
