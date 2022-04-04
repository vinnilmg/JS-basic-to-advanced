const nome = "Ronaldo";
export const sobrenome = 'Lima'; // exportando diretamente
const idade = 30;
const naoVouSerExportada = 0; // variavel privada desse modulo

function soma(x, y) {
    return x + y;
}

// exportando diretamente
export function subtrai(x, y) {
    return x - y;
}

export class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

// exportando como default
// Só é possível exportar uma coisa como default
// na importacao nao é preciso chaves {}
export default () => {
    return 'Hello World';
}

// exportando e renomeando
export { nome, idade as idd, soma };