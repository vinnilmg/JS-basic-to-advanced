// Adicionar e subtrair datas com JavaScript

function zeroFill(v) {
  return v < 9 ? `0${v}` : v;
}

function formatDate(date) {
  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth() + 1);
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());
  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

// ISO 8601
const stringDate = '2019-04-20T10:00:00-03:00';
const date = new Date(stringDate);
console.log(formatDate(date));

// Adicionando segundos na data
date.setSeconds(date.getSeconds() + 10);
console.log(formatDate(date));

date.setSeconds(date.getSeconds() + 60);
console.log(formatDate(date));

// Adicionando minutos
date.setMinutes(date.getMinutes() + 10);
console.log(formatDate(date));

date.setMinutes(date.getMinutes() + 60);
console.log(formatDate(date));

// Adicionando horas
date.setHours(date.getHours() + 1);
console.log(formatDate(date));

date.setHours(date.getHours() + 24);
console.log(formatDate(date));

// Adicionando dias
date.setDate(date.getDate() + 1);
console.log(formatDate(date));

date.setDate(date.getDate() + 30);
console.log(formatDate(date));

// Adicionando meses
date.setMonth(date.getMonth() + 1);
console.log(formatDate(date));

date.setMonth(date.getMonth() + 12);
console.log(formatDate(date));

// Adicionando anos
date.setFullYear(date.getFullYear() + 1);
console.log(formatDate(date));

date.setFullYear(date.getFullYear() + 100);
console.log(formatDate(date));

// Comparar 2 datas
const start = new Date('2019-01-01T12:00:00-03:00');
const end = new Date('2020-01-01T12:00:00-03:00');
const result = end - start; // retorna em milisegundos

const segundos = result / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;
const dias = horas / 24;

console.log(segundos, minutos, horas, dias);
