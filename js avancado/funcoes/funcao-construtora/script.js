// Função construtora => objetos, deve-se iniciar sempre com maiúscula, ex: Pessoa (é utilizado 'new')
// new => cria um objeto vazio e faz o this apontar para esse objeto vazio (nao precisa de return)


function Pessoa(nome, sobrenome) {
    // Sem o 'this' fica interno, atributos/métodos privados
    const idInterno = 123;
    const metodoInterno = function () {
    };

    // atributos/métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falaNomeCompleto = function () {
        console.log(this.nome, this.sobrenome);
    };
}

const pessoa1 = new Pessoa('Vinicius', 'Lima');
const pessoa2 = new Pessoa('Maria', 'Helena');

pessoa1.falaNomeCompleto();
pessoa2.falaNomeCompleto();