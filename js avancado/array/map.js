/* Map percorre cada valor do array original e faz alguma coisa
sempre envia automaticamente os parametros: valor, indice, array
sempre vai retornar a mesma qtd de elementos do array original
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log('Numeros em dobro:', numerosEmDobro);

const pessoas = [
    {nome: 'Vinicius', idade: 22},
    {nome: 'Beatriz', idade: 25},
    {nome: 'Maria', idade: 17},
    {nome: 'Ronaldo', idade: 14},
    {nome: 'Marcio', idade: 47},
    {nome: 'Matheus', idade: 10},
    {nome: 'Josue', idade: 15},
    {nome: 'Bruna', idade: 25},
    {nome: 'Sevilla', idade: 57},
];

const nomeDasPessoas = pessoas.map(pessoa => pessoa.nome);
console.log('Nome das pessoas:', nomeDasPessoas);

const idadeDasPessoas = pessoas.map(pessoa => ({idade: pessoa.idade})); // virou expressão ()
console.log('Idade das pessoas:', idadeDasPessoas);

const pessoasComID = pessoas.map((pessoa, indice) => {
    // pessoa.id = indice + 1; // alterando o objeto original
    // criando novo objeto e retornando (sem alterar o original)
    const novoObjPessoa = {...pessoa};
    novoObjPessoa.id = indice + 1;
    return novoObjPessoa;
});
console.log('Pessoas com ID:', pessoasComID);
