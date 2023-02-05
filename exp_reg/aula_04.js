const { html } = require('./base');

// Greedy e non-greedy

// obtendo qualquer tag HTML
console.log('Greedy:', html.match(/<.+>.+<\/.+>/g)); // -> greedy (comportamento padrão)
console.log('Non-greedy:', html.match(/<.+?>.+?<\/.+?>/g)); // -> non-greedy (?)
