
const var1 = "teste";
const var2 = "teste2";

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

// exportando 1 por 1
/*
exports.var1 = var1;
exports.var2 = var2;
exports.Pessoa = Pessoa;
exports.outraCoisa = 'Outra coisa';
*/

// exportando varios
module.exports = {
    var1, var2, Pessoa
};