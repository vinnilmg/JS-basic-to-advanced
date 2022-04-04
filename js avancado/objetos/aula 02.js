// Getter e Setter

function Carro(nome, marca, ano) {
    this.nome = nome;
    this.marca = marca;

    // Para get e set não é necessário as propriedade value e writable
    Object.defineProperty(this, 'ano', {
        enumerable: true,
        configurable: false,
        // value: ano,
        // writable: false,

        get: function () {
            return ano;
        },

        set: function (valor) {
            if (typeof valor !== 'number') return; // se nao for numero, nao faz nada
            ano = valor;
        }
    });
}

const carro1 = new Carro('Focus', 'Ford', 2006);
console.log(carro1);
console.log(carro1.ano); // chama Getter

carro1.ano = 2007; // chama Setter
console.log(carro1.ano); // novo valor
