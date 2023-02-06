const { cpfs2 } = require('./base');

/*
^ => Começa com
$ => Termina com
m - multiline
*/

const cpf = '123.123.123-17';
console.log(cpfs2);

// encontra com a flag 'm' pois está checando cada linha invidualmente
console.log(cpfs2.match(/^(\d{3}\.){2}\d{3}-\d{2}$/gm));

// localiza com ^ e $
console.log(cpf.match(/^(\d{3}\.){2}\d{3}-\d{2}$/g));
