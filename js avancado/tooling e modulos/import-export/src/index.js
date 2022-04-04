// importando default e o resto
import funcaoDefault, { nome as nome2, sobrenome, idd as idade, soma, subtrai, Pessoa } from './modulo1'; 
import variavelDefault, * as meuModulo from './modulo2'; 

const nome = 'Vinicius';

console.log(nome2, sobrenome, idade);
console.log(nome);
console.log(soma(2, 5), subtrai(2, 5));

const pessoa1 = new Pessoa(`${nome2} ${sobrenome}`, idade);
console.log(pessoa1);

console.log(meuModulo.v2);

console.log(funcaoDefault());
console.log(variavelDefault);