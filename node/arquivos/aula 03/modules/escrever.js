const fs = require('fs').promises;

/* flags
 a: append (insere no final)
 w: reescreve arquivo por completo
 */
module.exports = async function (caminho, dados) {
    await fs.writeFile(caminho, `${dados}\n`, { flag: 'w', encoding: 'utf8' });
    console.log('Arquivo criado com sucesso.');
};
