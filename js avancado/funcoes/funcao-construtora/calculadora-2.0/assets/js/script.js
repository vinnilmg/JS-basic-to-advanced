function Calculadora() {
    // Atributo privado
    const display = document.querySelector('.display');

    // Método público
    this.iniciarCalculadora = function () {
        clickBtn();
        pressionaEnter();
        clearDisplay();
    };

    const clickBtn = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) clearDisplay();
            if (el.classList.contains('btn-del')) apagaUmCaractere();
            if (el.classList.contains('btn-eq')) realizaCalculo(); 
        });
    };

    const pressionaEnter = function () {
        display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) realizaCalculo();
        });
    };

    const clearDisplay = () => display.value = '';

    const apagaUmCaractere = () => display.value = display.value.slice(0, -1);
    
    const btnParaDisplay = (valor) => {
        display.value += valor;
        display.focus(); // volta o foco para o display
    };
    
    const realizaCalculo = () => {
        let calculo = display.value;

        try {
            display.value = eval(calculo);
        } catch(e) {
            alert('Conta inválida');
            clearDisplay();
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.iniciarCalculadora();