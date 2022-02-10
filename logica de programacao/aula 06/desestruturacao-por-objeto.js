// Atribuição por desestruturação Objetos {}
const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Lima',
    idadeAnos: 22,
    endereco: {
        rua: 'Jose Augusto',
        numero: 75,
        bairro: 'Vila Babui'
    }
};

const { 
    nome, 
    sobrenome="Não existe", // Setando valor padrao
    idadeAnos: idade, // Alterando nome da variavel
    endereco,  // Objeto com endereço completo
    endereco: { rua, numero, bairro }  // Desestruturando objeto endereço
} = pessoa;

console.log(nome, sobrenome, idade, endereco); // variavel endereco contem o objeto de endereço
console.log(rua, numero, bairro); //objeto ja desestruturado

// Pegando só nome e resto
const { nome: n, ...resto } = pessoa;
console.log(n);
console.log(resto)