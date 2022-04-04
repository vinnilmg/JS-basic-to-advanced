// defineProperty e defineProperties

function Produto(nome, preco, tipo, estoque) {
    this.nome = nome;

    // Cria propriedade no objeto (apenas 1)
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da variavel
        writable: false, // define se é possível alterar o valor
        configurable: false // define se é configurável e se pode apagar a chave
    });

    // mais de 1 propriedade de uma vez
    Object.defineProperties(this, {
        tipo: {
            enumerable: true, 
            value: tipo, 
            writable: false, 
            configurable: false 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: false, 
            configurable: false
        },
    });
}

const p1 = new Produto('Melancia', 3.50, 'Fruta', 5);

// nao funciona pois writable é falso
p1.estoque = 10; 
p1.preco = 15;

// nao funciona pois configurable é falso
delete p1.estoque; 
delete p1.tipo;

console.log(p1);
console.log(Object.keys(p1)); // exibe as chaves do objeto (enumerable: true)