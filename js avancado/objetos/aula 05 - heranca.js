// Herança linkando os prototypes e constructor

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;
}

Produto.prototype.aumenta = function (valor) {
    this.preco += valor;
};

// linka prototypes como Produto
Camiseta.prototype = Object.create(Produto.prototype);
Caneca.prototype = Object.create(Produto.prototype);

// setando construtores
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype.constructor = Caneca;

// sobrescrevendo funcao de produto
Caneca.prototype.aumenta = function (valor) {
    this.preco *= valor;
};

const produto = new Produto('Generico', 0.1);
const camiseta = new Camiseta('Homem-aranha', 15.0, 'Azul');
const caneca = new Caneca('The Office', 25.0, 'Porcelana');

camiseta.aumenta(15);
caneca.aumenta(4);

console.log(produto);
console.log(camiseta);
console.log(caneca);