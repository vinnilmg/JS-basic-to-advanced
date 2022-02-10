// (condicao) ? valor verdadeiro : valor falso

const idade = 24;

// condição if normal
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// condição if ternário
const maiorIdade = idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

const salario = 2000;
const impostoRenda = salario >= 3000 ? true : false;
console.log("Devo pagar imposto?", impostoRenda); 

const horasDormidas = 15;
console.log(horasDormidas <= 6 ? "Dorme pouco" : 
            horasDormidas <= 8 ? "Dorme o correto" : "Dorme demais");