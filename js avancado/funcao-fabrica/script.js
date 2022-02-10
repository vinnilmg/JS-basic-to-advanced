// Factory function
function criaCarro (nome, marca, tipo, ano, tam) {
    return {
        nome,
        marca,
        tipo,
        tamanho: tam,
        especificaCarro(preco) {
            return `Carro: ${this.nome}, Montadora: ${this.marca}, preço: ${preco}`;
        },
        ano,
        // função "finge" ser um atributo (Getter)
        get raro() { 
            return (this.ano < 2010) ? true : false;
        },

        // Getter
        get nomeCompleto() {
            return `${this.marca} ${this.nome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' '); // quebra o nome
            this.marca = valor.shift(); // retira o primeiro da lista e joga na marca
            this.nome = valor.join(' '); // junta o resto
        }
    };
}

const carro1 = criaCarro('Focus', 'Ford', 'Hatch', 2006);
carro1.nomeCompleto = 'Ford Focus Ghia';

//console.log(carro1);
console.log(carro1.especificaCarro('R$ 26.600,00'));
console.log('É raro?', carro1.raro);
console.log(carro1.nomeCompleto);

/*
const carro2 = criaCarro('Ethios', 'Toyota', 'Hatch', 2018);
//console.log(carro2);
console.log(carro2.especificaCarro('R$ 45.800,00'));
console.log('É raro?', carro2.raro);
console.log(carro2.nomeCompleto);
*/