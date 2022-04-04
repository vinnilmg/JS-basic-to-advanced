/* "Reduz" o array
sempre envia automaticamente os parametros: acumulador, valor, indice, array 
sempre retornar valor para o acumulador (é possivel iniciar o acumulador com valor)
se nao for enviado valor inicial para o acumulador, ele será o primeiro valor da lista/objeto
*/

const numeros = [5, 16, 24, 64, 526, 129, 121, 147, 2];
const somaTotal = numeros.reduce((acumulador, valor) => acumulador += valor, 0); // iniciando acumulador com 0
console.log('Total somado:', somaTotal);

// Filter (sempre utilizar o filter para isso)
const apenasPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); // iniciando acumulador com array vazio
console.log('Apenas pares:', apenasPares);

// Map (sempre utilizar o map para isso)
const numerosEmDobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []); // iniciando acumulador com array vazio
console.log('Dobro dos números:', numerosEmDobro);

const pessoas = [
    {nome: 'Vinicius', idade: 22},
    {nome: 'Beatriz', idade: 25},
    {nome: 'Maria', idade: 17},
    {nome: 'Ronaldo', idade: 14},
    {nome: 'Marcio', idade: 101},
    {nome: 'Matheus', idade: 10},
    {nome: 'Josue', idade: 15},
    {nome: 'Bruna', idade: 25},
    {nome: 'Sevilla', idade: 57},
];

// acumulador inicia como Vinicius[0] e pessoa como Beatriz[1]
const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
    if (acumulador.idade > pessoa.idade) return acumulador;
    return pessoa;
}); 
console.log('Pessoa mais velha:', pessoaMaisVelha);