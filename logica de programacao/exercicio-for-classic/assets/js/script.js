function criaObjeto(tag, frase) {
    return {
        tag,
        frase
    };
}

function criaTag(tag, frase) {
    const tagHTML = document.createElement(tag); 
    tagHTML.classList.add(`tag-${frase.replace(' ', '-').toLowerCase()}`); // adicionando classe a tag

    //tagHTML.innerText = frase; // Alterando innerText ao invés do innerHTML pois não tem tags de HTML
    const texto = document.createTextNode(frase);
    tagHTML.appendChild(texto);

    return tagHTML;
}

const tags = ['p', 'div', 'footer', 'section'];
const resultado = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < tags.length; i++) {
    let objeto = criaObjeto(tags[i], `Frase ${i}`);
    let { tag, frase } = objeto;
    let tagHTML = criaTag(tag, frase);

    console.log(tag, frase);

    div.appendChild(tagHTML);
}

resultado.appendChild(div);