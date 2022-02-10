const relogio = document.querySelector(".timer");
let timer;

const getTime = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

function iniciarTimer() {
    clearInterval(timer); // limpar os timers existentes
    relogio.style.color = "#000"; //volta cor da letra pra preto

    let segundos = 0;
    timer = setInterval(() => {
        relogio.innerHTML = getTime(segundos++);
        console.log(segundos);
    }, 1000);
};

function pausarTimer() {
    clearInterval(timer);
    relogio.style.color = "red"; // troca cor da letra pra vermelho
};

function zerarTimer() {
    clearInterval(timer);
    relogio.innerHTML = getTime(0); // zera o timer na tela
    relogio.style.color = "#000";
};

document.addEventListener('click', function(e) {
    const evento = e.target;

    if (evento.classList.contains('iniciar')) {
        iniciarTimer();

    } else if (evento.classList.contains('pausar')) {
        pausarTimer();

    } else if (evento.classList.contains('zerar')) {
        zerarTimer();

    } else {
        console.log(evento);
    }
});