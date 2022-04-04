// se comporta como uma função construtora
class Carro {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }

    // os metodos são linkados diretamente no prototype
    dirigir(marcha) {
        console.log(this.marca, this.nome, 'está dando partida na marcha:', marcha);
    }
}

const carro1 = new Carro("Focus", "Ford");
console.log(carro1);
carro1.dirigir(2);