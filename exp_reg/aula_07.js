const { html2 } = require('./base');

// Retrovisores => Para referenciar $1 $2 $3 OU \1 \2 \3
// .* => dot all
// ?: => dentro de um grupo () faz com que não seja salvo na memória e não conte nos retrovisores

console.log(html2);

/* <p>Olá mundo</p>

(\w+) => p
([\s\S]*?) => Olá mundo
\1 => p
*/
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/gi)); // utilizando retrovisores
console.log(
  html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$1 HIHI $3 HIHI $4')
);
