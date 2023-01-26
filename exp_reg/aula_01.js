/* Expressões regulares: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

Utilizado em:
-> Validações
-> Encontrar valores
-> Substituir valores
-> Remover valores

Flags:
g - global (encontra todas as ocorrências)
i - insensitive (não liga se é minúscula/maiúscula)

() - groups
 | - OU
*/

const { texto } = require('./base');

// Escrever a EXP_REG entre /{exp}/ e do lado de fora as flags
const regExp1 = /Vini/gi;
const regExp2 = /, EUUUUU/gi;
const regExp3 = /(maria|vinni|vini)/gi;

// Verifica se a expressao existe no texto -> true or false
console.log(regExp1.test(texto));
console.log(regExp2.test(texto));

// Retorna um objeto com o indice que foi encontrado
console.log(regExp1.exec(texto));
console.log(regExp2.exec(texto));
console.log(regExp3.exec(texto));

// validado se é um email
const email = 'aluno@eu.com';
const emailGmail = 'aluno@gmail.com';

const regExpEmail = /@gmail.com|@eu.com/;
console.log(regExpEmail.test(email));
console.log(regExpEmail.test(emailGmail));
