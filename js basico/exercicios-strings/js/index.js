
const nome = prompt('Digite seu nome completo:');
console.log(nome);

document.body.innerHTML += `Seu nome é <b>${nome}</b> </br>`;
document.body.innerHTML += `Seu nome tem <b>${nome.length}</b> letras. </br>`;
document.body.innerHTML += `A segunda letra do seu nome é <b>${nome[1]}</b> </br>`; // ou .charAt(1)
document.body.innerHTML += `Seu nome UPPER <b>${nome.toUpperCase()}</b> </br>`;
document.body.innerHTML += `Seu nome LOWER <b>${nome.toLowerCase()}</b> </br>`;
document.body.innerHTML += `Índice da primeira letra "i" no seu nome <b>${nome.indexOf('i')}</b> </br>`;
document.body.innerHTML += `Índice da ultima letra "i" no seu nome <b>${nome.lastIndexOf('i')}</b> </br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são <b>${nome.slice(-3)}</b> </br>`;
document.body.innerHTML += `As palavras do seu nome são <b>${nome.split(' ')}</b> </br>`;
