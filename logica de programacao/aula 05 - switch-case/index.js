const dataHoje = new Date();
const diaSemana = dataHoje.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

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
