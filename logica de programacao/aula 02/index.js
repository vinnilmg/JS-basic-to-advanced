// Avaliacao de curto-circuito

/* 
FALSY (avaliam em falso quando necessário)
	- false
	- 0
	- '' "" ``
	- Null / undefined
    - NaN
*/

function falaOi () {
    return 'Oi';
}

const vaiExecutar = true;

// se tudo for verdadeiro, retorna o ultimo valor (nesse caso executa a função), se nao retorna o valor falso
console.log(vaiExecutar && falaOi());

// retorna o primeiro valor verdadeiro que encontrar
console.log(vaiExecutar || falaOi());