
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.fala = function () {
    return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
}

const p1 = new Pessoa('Vinicius', 22);
console.log(p1.fala());

// objeto literal
const p2 = {
    nome: 'Maria',
    idade: 20
};

// setando prototype do objeto literal para poder utilizar os metodos
Object.setPrototypeOf(p2, Pessoa.prototype);
console.log(p2.fala());

// criando novo objeto ja setando o prototype
const p3 = Object.create(Pessoa.prototype);
p3.nome = 'Ronaldo';
p3.idade = 18;
console.log(p3.fala());