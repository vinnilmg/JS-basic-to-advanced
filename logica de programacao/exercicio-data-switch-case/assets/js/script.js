/*const dataHoje = new Date();
const data = dataHoje.getDate();
const diaSemanaText = getDiaSemanaTexto(dataHoje.getDay());
const mesText = getMesTexto(dataHoje.getMonth());
const ano = dataHoje.getFullYear();
const horaMinutos = acertaHorario(dataHoje.getHours(), dataHoje.getMinutes())

exibeData(data, diaSemanaText, mesText, ano, horaMinutos);

function exibeData(data, diaSemana, mes, ano, horaMinutos) {
    const resultado = document.querySelector('.container #data');
    resultado.innerHTML = '';

    resultado.innerHTML = `${diaSemana}, ${data} de ${mes} de ${ano} ${horaMinutos}`;
}

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        //break;
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        //break;
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        //break;
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        //break;
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        //break;
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        //break;
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sábado';
        //break;
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}

function getMesTexto(mes) {
    switch (mes) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return '';
    }
}

function acertaHorario(hora, minutos) {
    let horario = '';

    if (hora < 10) {
        horario += `0${hora}:`;
        console.log(horario);
     } else {
        horario += `${hora}:`;
    }

    if (minutos < 10) {
        horario += `0${minutos}`;
    } else {
        horario += `${minutos}`;
    }

    return horario;
}*/

const h1 = document.querySelector('.container #data');
const data = new Date();
const options = { dateStyle: 'full', timeStyle: 'short' };

h1.innerHTML = data.toLocaleString('pt-BR', options);