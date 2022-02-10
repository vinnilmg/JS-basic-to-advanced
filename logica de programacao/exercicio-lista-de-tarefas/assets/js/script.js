const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnNovaTarefa = document.querySelector('.btn-add-tarefa');
const ulTarefas = document.querySelector('.tarefas');

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // coloca o foco no input 
}

function criaTarefa(tarefa) {
    const liTarefa = document.createElement('li');
    liTarefa.innerText = tarefa;

    criaBotaoApagarTarefa(liTarefa); // cria o botao de apagar

    ulTarefas.appendChild(liTarefa); // adiciona na UL
}

function criaBotaoApagarTarefa(li) {
    li.innerText += ' '; // coloca espaço entre o li e o botão

    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'btn-apagar');
    btnApagar.setAttribute('title', 'Apagar essa tarefa');

    li.appendChild(btnApagar); // coloco o botao no li
}

function taskFactory() {
    if (!inputTarefa.value) return; 
        
    criaTarefa(inputTarefa.value);
    salvaTarefas();
    limpaInput();
}

function salvaTarefas() {
    const tarefas = ulTarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let tarefa of tarefas) {
        const tarefaText = tarefa.innerText.replace('Apagar', '').trim(); // formatando texto da tarefa
        listaDeTarefas.push(tarefaText);
    }
    
    const tarefasString = JSON.stringify(listaDeTarefas); // transformando em string JSON
    localStorage.setItem('tarefas', tarefasString); // salvado no local storage do navegador (só pode salvar strings)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // pegando tarefas salvas no local storage
    const listaDeTarefas = JSON.parse(tarefas); // converte de novo para lista

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa); // adiciona as tarefas salvas de volta na tela qdo recarregar
    }
}

// adicionando eventos de click e pressionar do enter
btnNovaTarefa.addEventListener('click', taskFactory);

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) taskFactory(); // key code 13 => Tecla 'Enter'
});

// colocando evento no botao apagar para deletar tarefa do ul
document.addEventListener('click', (e) => {
    const elClicked = e.target;

    if (elClicked.classList.contains('btn-apagar')) {
        elClicked.parentElement.remove();
        salvaTarefas(); // para apagar as tarefas deletadas
    }
});

adicionaTarefasSalvas();