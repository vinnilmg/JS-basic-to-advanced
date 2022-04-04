class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    get nomeCompleto() {
        //console.log('Chamei o GET');
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(nomeCompleto) {
        //console.log('Chamei o SET');
        nomeCompleto = nomeCompleto.split(' ');
        this.nome = nomeCompleto.shift();
        this.sobrenome = nomeCompleto.join(' ');
    }
}

const p1 = new Pessoa('Vinicius', 'Lima', 22);
console.log(p1.nomeCompleto); // chama o GET

p1.nomeCompleto = 'Vinicius de Lima Gomes'; // chama o SET
console.log(p1.nomeCompleto);

console.log(p1.nome);
console.log(p1.sobrenome);
