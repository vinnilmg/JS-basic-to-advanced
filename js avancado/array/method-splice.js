// method splice
// array.splice(indice, qtd elementos para remover, elementos para incluir (separando por ','));

const nomes = ['Maria', 'Vinicius', 'Ronaldo', 'Amauri'];
console.log('Array inicial:', nomes);

// adicionando no indice que quero
nomes.splice(1, 0, 'Joao');
console.log('Array atualizado:', nomes);

// removendo e adicionando no mesmo indice
nomes.splice(1, 1, 'Marquinhos');
console.log('Array atualizado:', nomes);

// simulando pop => remover o ultimo
const removido1 = nomes.splice(-1, 1); // removendo apenas 1 na ultima posição
console.log('Simulando Pop:', nomes, removido1);

// simulando shift => remover o primeiro
const removido2 = nomes.splice(0, 1);
console.log('Simulando Shift:', nomes, removido2);

// simulando push => adiciona no final
nomes.splice(nomes.length, 0, 'Julia');
console.log('Simulando Push:', nomes);

// simulando unshift => adiciona no começo
nomes.splice(0, 0, 'Beatriz', 'Gabriel');
console.log('Simulando Unshift:', nomes);
