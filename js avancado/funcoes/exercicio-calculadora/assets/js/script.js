const calculadora = (function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        init() {
            this.clickBtn();
            this.pressionaEnter();
            this.clearDisplay();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) this.realizaCalculo();
            });
        },
        
        clickBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);

                } else if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
            
                } else if (el.classList.contains('btn-del')) {
                    this.apagaUmCaractere();
                
                } else if (el.classList.contains('btn-eq')) {
                    this.realizaCalculo();
                } 
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUmCaractere() {
            this.display.value = this.display.value.slice(0, -1); // remove ultimo caractere
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        realizaCalculo() {
            let calculo = this.display.value;

            try {
                // executa a string como código JS (falha de segurança)
                this.display.value = eval(calculo);
            } catch(e) {
                alert('Conta inválida');
                this.clearDisplay();
                return;
            }
        },

    };
})();

calculadora.init();
