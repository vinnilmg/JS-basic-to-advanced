// Atribuição por desestruturação Arrays []
const ingredientes = ['Arroz', 'Branco', 'Comida'];
[ nome, cor, tipo ] = ingredientes;

console.log(nome, tipo, cor);

// Pegando os primeiros e resto
const listaTarefas = ['Dormir', 'Tomar banho', 'Assistir Ozark', 'Ir ao banheiro', 'Trabalhar'];
[tarefa1, tarefa2, ...restoTarefas] = listaTarefas;

console.log(tarefa1, tarefa2);
console.log(restoTarefas);

// Pegando os valores pulando de 2 em 2
const numeros = [1000, 2000, 3000, 4000, 5000, 6000];
[um, , tres, , cinco] = numeros;

console.log(um, tres, cinco);