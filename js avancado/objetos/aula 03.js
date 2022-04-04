// Metodos úteis para objetos

// Copiando propriedades do objeto
const produto = { nome: 'PC', preco: 5000 };

// com spread
const outroProduto = { ...produto, marca: 'Lego' }; 
outroProduto.nome = 'Notebook';
outroProduto.preco = 10000;

// com metodo assign
const outroProduto2 = Object.assign({}, produto, { marca: 'Brastemp' });
outroProduto2.nome = 'Maquina de lavar';
outroProduto2.preco = 7000;

console.log(produto);
console.log(outroProduto);
console.log(outroProduto2);

// Exibe chaves do objeto
console.log(Object.keys(outroProduto2));

// "Congela" objeto (nao deixa alterar)
Object.freeze(produto);
produto.nome = 'Novo nome';
produto.marca = 'Teste';

console.log(produto);

// Descreve propriedades do campo
console.log(Object.getOwnPropertyDescriptor(outroProduto2, 'marca'));

// Exibe valores do objeto
console.log(Object.values(outroProduto2));

// Exibe chaves e valores do objeto
console.log(Object.entries(outroProduto2));