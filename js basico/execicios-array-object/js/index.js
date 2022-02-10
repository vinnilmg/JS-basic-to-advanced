const criaPessoa = function (nome, sobrenome, peso, altura) { 
    return { nome, sobrenome, peso, altura };
};

function meuEscopo() {
    const form = document.querySelector('.form'); // classe = . id = #
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); // nao deixa recarregar a pagina

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
    }
    
    // escutando o evento 'submit'
    form.addEventListener('submit', recebeEventoForm); 
}
meuEscopo();