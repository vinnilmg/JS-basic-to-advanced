const fs = require('fs').promises;
const path = require('path');

async function listaDir(pathDir) {
    pathDir = pathDir || path.resolve(__dirname);
    const files = await fs.readdir(pathDir);
    await walk(files, pathDir);
}

async function walk(arquivos, pathDir) {
    for(let file of arquivos) {
        const fileFullPath = path.resolve(pathDir, file);
        const stats = await fs.stat(fileFullPath); // pega status do arquivo
        
        if (stats.isDirectory()) { // verifica se é diretório
            console.log('Pasta:', file);
            await listaDir(fileFullPath);
            continue;
        } 

        console.log('Arquivo:', file);
    }
}

listaDir(path.resolve(__dirname, '../'));