
function criaObjeto(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

function criaObjeto2(nome1, sobrenome1, idade1) {
    return {
        nome: nome1,
        sobrenome: sobrenome1,
        idade: idade1
    };
}

const pessoa1 = criaObjeto('Vinicius', 'Lima', 22);
const pessoa2 = criaObjeto('Maria', 'Helena', 20);
const pessoa3 = criaObjeto('Marcio', 'Silva', 25);

console.log('Objeto completo:', pessoa1);
console.log('Só o atributo nome:', pessoa1.nome);
console.log(pessoa2);
console.log(pessoa3);

const pessoa4 = criaObjeto2('Teste', 'Teste2', 23);
console.log(pessoa4);

const objetoPessoa = {
    nome: '',
    sobrenome: '',

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando 'Oi'.`);
    }
};

objetoPessoa.nome = 'Vinicius';
objetoPessoa.sobrenome = 'Lima';
objetoPessoa.fala();