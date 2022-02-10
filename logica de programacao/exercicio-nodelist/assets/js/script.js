
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body); // pegando estilos (CSS) do body
const backgroundColorBody = styleBody.backgroundColor; // pegando propriedade background color
console.log('Cor do body: ', backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // altera propriedade da cor do fundo
    p.style.color = '#FFFFFF'; // altera cor da fonte
}