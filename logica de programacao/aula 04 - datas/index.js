// pega data e hora atual
const data = new Date(); 
console.log('Data atual 1:', data.toString());
console.log('Data atual 2:', new Date(Date.now()));

// informando datas em padroes diferentes
const data1 = new Date(2020, 4, 30, 10, 59, 30); // a, m, d, h, M, s, ms 
console.log('Data informada 1:', data1.toString());

const data2 = new Date('2021-01-01 20:20:59');
console.log('Data informada 2:', data2.toString());

// separando data dando get em cada informação
console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth() + 1); // Pega o Mês de 0-11
console.log('Ano:', data.getFullYear());
console.log('Hora:', data.getHours());
console.log('Minuto:', data.getMinutes());
console.log('Segundo:', data.getSeconds());
console.log('MS:', data.getMilliseconds());
console.log('Dia da semana:', data.getDay()); // 0 - Domingo, 6 é Sábado
