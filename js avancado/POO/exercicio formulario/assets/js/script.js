class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', evento => {
            this.handleSubmit(evento);
        });
    }

    handleSubmit(evento) {
        evento.preventDefault(); // para o formulario nao ser enviado
        this.removeErros(); // remove erros pra não inserir mais do mesmo
        const formularioValido = this.validaCampos(); // validacoes

        if (formularioValido) this.formulario.submit(); // envia o formulario se for valido
    }   

    validaCampos() {
        let formularioValid = true;

        for (let campo of this.formulario.querySelectorAll('.valida')) {
            let label = campo.previousElementSibling.innerText; // Pega label anterior ao input do campo

            if (!campo.value) {
                ValidaFormulario.criaErro(campo, `Campo "${label}" não pode estar vazio.`);
                formularioValid = false;
            }

            if (campo.id === 'cpf') {
                if(!ValidaFormulario.validacaoCPF(campo)) {
                    ValidaFormulario.criaErro(campo, `Campo "${label}" inválido.`);
                    formularioValid = false;
                }
            }

            if(campo.id === 'user') {
                const tamanhoOk = ValidaFormulario.validaTamanho(campo, 3, 12);
                if (!tamanhoOk) {
                    ValidaFormulario.criaErro(campo, `Campo "${label}" deverá estar entre 3 e 12 posições.`);
                    formularioValid = false;
                }
                
                // expressao regular para validar se a string contém somente letras e numeros
                if(!campo.value.match(/^[a-zA-Z0-9]+$/g)) {
                    ValidaFormulario.criaErro(campo, `Campo "${label}" deverá ter somente letras e números.`);
                    formularioValid = false;
                }
            }

            if(campo.id === 'password') {
                const tamanhoOk = ValidaFormulario.validaTamanho(campo, 6, 12);
                if (!tamanhoOk) {
                    ValidaFormulario.criaErro(campo, `Campo "${label}" deverá estar entre 6 e 12 posições.`);
                    formularioValid = false;
                }
                
                const senha2 = this.formulario.querySelector('#password-2');
                if (campo.value !== senha2.value) {
                    ValidaFormulario.criaErro(campo, 'As duas senhas devem ser idênticas.');
                    ValidaFormulario.criaErro(senha2, 'As duas senhas devem ser idênticas.');

                    formularioValid = false;
                }
            }
        }

        return formularioValid;
    }

    removeErros() {
        for(let erro of this.formulario.querySelectorAll('.error-text')) erro.remove();
    }

    static criaErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); // insere após o campo
    }

    static validacaoCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        return cpf.valida();
    }

    static validaTamanho(campo, minimo, maximo) {
        return campo.value.length >= minimo && campo.value.length <= maximo;
    }

}

const valida = new ValidaFormulario();