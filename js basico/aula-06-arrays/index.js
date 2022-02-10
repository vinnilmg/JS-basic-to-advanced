const alunos = ['Maria', 'Vinicius', 'Joao']
console.log('Array inicial:', alunos);

// Alterando lista
alunos[0] = 'Pedro'
console.log('Array alterado:', alunos);

// Adicionando no fim
alunos[alunos.length] = 'Matheus'; 
alunos[alunos.length] = 'Fabio'; 
alunos.push('Luana');
alunos.push('Joca'); 
console.log('Array adicionando no fim:', alunos);

// Adicionando no começo
alunos.unshift('Pedrin do baile');
alunos.unshift('Amauri');
console.log('Array adicionando no começo:', alunos);

// Remover do fim
const elementoRemovido = alunos.pop();
console.log('Array removendo o ultimo elemento:', alunos);
console.log(`Elemento removido: ${elementoRemovido}`);

// Remover do começo
const elementoRemovido2 = alunos.shift();
console.log('Array removendo o primeiro elemento:', alunos);
console.log(`Elemento removido: ${elementoRemovido2}`);

// Tamanho do array
console.log('\nTamanho do array [alunos]:', alunos.length);

// Deletando elemento do meio
delete alunos[3];
console.log('Removendo o [Joao]:', alunos);

// Acessando indice inexistente
console.log(alunos[1000]); // nao da erro, somente encontra 'undefined'

// Quebrando array
console.log('Quebrando array: ', alunos.slice(0, 3)); // pega os elementos: 0, 1 e 2
console.log('Quebrando array eliminando: ', alunos.slice(0, -4)); // pega os elementos: 0, 1 e 2 (removeu os 4 ultimos)

// tipo do array é 'object'
console.log('Tipo do array:', typeof alunos);
console.log('[alunos] é um array? ', alunos instanceof Array);