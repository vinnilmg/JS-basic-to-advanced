// Posso enviar argumentos para funções q não aceitam parâmetros que não dá erro e consigo pegar os argumentos pelo 'arguments'
// também posso fazer utilizando o rest operator -> ...args
function semArgumentos() {
    for (let argumento of arguments) {
        console.log(argumento);
    }
}
semArgumentos(1, 2, 3, 'Luiz', true);

// Os parâmetros da função já começam com valor padrão => undefined
function maisArgumentos(a, b, c, d) {
    console.log(a, b, c, d);
}
maisArgumentos(1, 2);

// Setando valor padrão como 0 (para não ser undefined)
function valorPadrao(a, b = 0) {
    console.log(a + b);
}
valorPadrao(1);

// Função aceitando objeto e realizando a desestruturação (funciona com array também)
function funcComObjeto({nome, idade}) {
    console.log(nome, idade);
}
funcComObjeto({ nome: 'Vinicius', idade: 15 });

// Rest operator
function comOperadorRest(numero1, numero2, ...restoNumeros) {
    console.log(numero1, numero2);
    console.log(restoNumeros);
}
comOperadorRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);