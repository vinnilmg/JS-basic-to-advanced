const path = require('path');
const criaArquivo = require('./modules/escrever');
const lerArquivo = require('./modules/ler');

const caminhoArquivo = path.resolve(__dirname, './arquivos gerados/','teste.json');

const carros = JSON.stringify([
    { nome: 'Focus', marca: 'Ford' },
    { nome: '500', marca: 'Fiat' },
    { nome: 'Civic', marca: 'Honda' },
    { nome: 'Camaro', marca: 'Chevrolet' },
    { nome: 'New Fiesta', marca: 'Ford' },
], '', 2);

criaArquivo(caminhoArquivo, carros);
lerArquivo(caminhoArquivo);