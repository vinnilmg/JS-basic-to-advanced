// pega evento de click
document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); // pega tag

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const pagina = el.getAttribute('href'); // pega elemento 'href' da tag 'a'

    try {
        const response = await fetch(pagina); // faz o request
        const html = await response.text(); // pega retorno em text

        if (response.status !== 200) throw new Error(response.statusText);

        carregaResultado(html);
    } catch(e) {
        console.log(e);
    }
}

// joga resultado na DIV
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}