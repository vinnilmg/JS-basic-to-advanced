// COM AND (&&)
const nome = 'Vinicius';
const sobrenome = 'Lima';

function falaNome() {
  console.log(nome + ' ' + sobrenome);
}

// retorna o primeiro valor falso, nesse caso vai chamar a função, já que todos são verdadeiros
nome && sobrenome && falaNome();

// COM OR (||)
const corPadrao = 'black';
let corUsuario = null;

function getColor() {
  console.log(corUsuario || corPadrao);
}

// Exibe 'black'
getColor();
corUsuario = 'pink';

// Exibe 'pink'
getColor();
