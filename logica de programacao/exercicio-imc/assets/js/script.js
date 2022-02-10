const form = document.querySelector('#form');

// pegando o evento de envio (submit)
form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso'); 
    const inputAltura = evento.target.querySelector('#altura');

    // convertendo para number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado("Peso inválido.", false);
        return; 
    }
    
    if (!altura) {
        setResultado("Altura inválida.", false);
        return; 
    }

    const imc = calculaIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é: ${imc}, Nível: ${nivelIMC}`
    setResultado(msg, true);
});

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function calculaIMC(peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaParagrafo(isValid) {
    const p = document.createElement('p'); // criando um paragrafo <p></p>

    if (isValid) {
        p.classList.add('result-sucess'); // adicionando class ao paragrafo
    } else {
        p.classList.add('result-error'); // adicionando class ao paragrafo
    }

    return p;
}

const setResultado = (msg, isValid) => {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // limpando HTML

    const p = criaParagrafo(isValid);
    p.innerHTML = msg; // inserindo msg no paragrafo
    resultado.appendChild(p); // insere no resultado
}
