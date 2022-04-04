/* Filtra o array utilizando a função de callback (funcao deve retornar true ou false)
sempre envia automaticamente os parametros: valor, indice, array
sempre vai retornar a mesma qtd de elementos OU menos (de acordo com o filtro) 
*/

const numeros = [1, 2, 11, 10, 15, 20, 3, 45, 82, 7, 36];
const numerosMaioresQue10 = numeros.filter(valor => valor > 10);
console.log('Numeros maiores que 10:', numerosMaioresQue10);

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

const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log('Pessoas maiores de idade:', pessoasMaioresDeIdade);

const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 7);
console.log('Pessoas com nome maior/igual a 7 letras:', pessoasComNomeGrande);

const pessoaComNomeFinalizadoEmA = pessoas.filter(pessoa => {
    return pessoa.nome.toLowerCase().endsWith('a');
});
console.log('Pessoas com nome finalizado em "A":', pessoaComNomeFinalizadoEmA);
