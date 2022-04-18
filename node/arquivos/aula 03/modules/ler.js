const fs = require('fs').promises;

module.exports = async function (caminho) {
    const dados = await fs.readFile(caminho, 'utf8');
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);

    console.log('Dados do JSON:');
    for(let dado of dados) console.log(dado);
}