const number1 = Number(prompt('Digite um número:'));
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = number1;
texto.innerHTML = `
    <p>Raiz quadrada: ${Math.sqrt(number1)}</p>
    <p>${number1} é inteiro: ${Number.isInteger(number1)}</p>
    <p>${number1} é NaN: ${Number.isNaN(number1)}</p>
    <p>Arredondando para baixo: ${Math.floor(number1)}</p>
    <p>Arredondando para cima ${Math.ceil(number1)}</p>
    <p>Com 2 casas decimais: ${number1.toFixed(2)}</p>
`;