const { lookahed } = require('./base');

/*
Lookahead => Retorna a expressão "se" houver o que foi solicitado na frente (assertion), não retorna o que foi consumido
?= -> positive lookahed -> se existir
?! -> negative lookahed -> se nao existir

Lookbehind => Retorna a expressão "se" houver o que foi solicitado para trás
?<= -> positive lookbehind
?<! -> negative lookbehind
*/

console.log(lookahed);
console.log(lookahed.match(/.+[^in]active$/gim));

// Positive lookahed (frases que contenham "active")
console.log(lookahed.match(/.+(?=[^in]active)/gim));

// Negative lookahed (frases que NAO contenham "active")
console.log(lookahed.match(/^(?!.+[^in]active).+/gim));

// Positive lookbehind (frases que contenham a palavra ONLINE no começo)
console.log(lookahed.match(/(?<=ONLINE\s+).*/gim));

// Negative lookbehind (frases que não começam com ONLINE)
console.log(lookahed.match(/^.+(?<!ONLINE.+)$/gim));
