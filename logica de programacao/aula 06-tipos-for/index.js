const frutas = ['Banana', 'Maça', 'Melancia', 'Mamão', 'Uva'];

const carro = {
    nome: 'Focus',
    marca: 'Ford',
    ano: 2007,
    versao: '2.0 GHIA'
};

// for clássico -> tem um contador (array ou string)
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// for in -> Lê os índices da lista ou chave de objeto (array, string ou objetos)
for (let indice in frutas) {
    console.log(frutas[indice]);
}

for (let key in carro) {
    console.log(`${key}: ${carro[key]}`);
}

// for of -> Lê os valores da lista, nao vem o indice/chave, somente o valor (array ou string)
for(valor of frutas) {
    console.log(valor);
}

// for each -> retorna o valor, indice e o array completo
frutas.forEach(function(valor, indice, array) {
    console.log(indice, valor, array);
});
