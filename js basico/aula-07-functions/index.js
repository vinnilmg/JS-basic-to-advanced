/* FUNCTIONS */

// Função que recebe 2 valores com valores padrão de 0
function soma(x = 0, y = 0) {
    return x + y;
}
console.log(soma(5, 5));

// Função anonima
const multiplica = function (n1, n2) {
    return n1 * n2;
};
console.log(multiplica(5, 5));

// Arrow functions
const divide = (n1, n2) => {
     return n1 / n2;
};
console.log(divide(10, 2));

const subtrai = (n1, n2) => n1 - n2;
console.log(subtrai(10, 5));