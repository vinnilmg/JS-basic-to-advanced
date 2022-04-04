class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    // Método de instância => tem acesso aos dados da instancia
    // é acessado como: instancia.metodo()
    acelerar(velocidade) {
        this.velocidade += velocidade;
    }

    // Método estático => nao tem acesso aos dados da instancia 
    // é acessado como: classe.metodo()
    static lavarCarros() {
        console.log('Lavando todos os carros...');
    }
}

const carro1 = new Carro('Uno');
carro1.acelerar(50); 

console.log(carro1);

Carro.lavarCarros(); 