const path = require('path'); // importando modulo

const modulo1 = require('./modulo1'); // importado modulo criado (tem que informar o caminho)
const { var1, var2, Pessoa } = require('./modulo1'); // descompactando

console.log(modulo1);

const pessoa1 = new Pessoa('Vinicius');
console.log(pessoa1);

// __filename => caminho absoluto do arquivo atual
// __dirname => caminho absoluto da pasta atual
console.log(__dirname);
console.log(__filename);