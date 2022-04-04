class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome, 'já está ligado.');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome, 'já está desligado.');
            return;
        }

        this.ligado = false;
    }
}

// Herança
class TV extends DispositivoEletronico {
    constructor(nome, marca, polegadas) {
        super(nome); // chama construtor do pai
        
        this.marca = marca;
        this.polegadas = polegadas;
    }

    // Sobrescrevendo metodo do PAI (DispositivoEletronico)
    ligar() {
        console.log("Metodo alterado na classe filho.");
    }

    // Método específico de TV
    mudarCanal(canal) {
        console.log("Canal alterado para:", canal);
    }
}

const tv = new TV('TV LCD', 'Toshiba', 48);
console.log(tv);

tv.ligar();
tv.desligar();
tv.mudarCanal('Globo');