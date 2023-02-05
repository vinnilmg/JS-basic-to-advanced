const { ips } = require('./base');

console.log(ips);

// pegando ips inválidos (acima de 255.255.255.255)
console.log(ips.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g)); // com atalho \d
console.log(ips.match(/(\d{1,3}\.){3}\d{1,3}/g)); // com grupo

/* pegando somente válidos
250 - 255 => 25[0-5]
200 - 249 => 2[0-4][0-9]
100 - 199 => 1[\d][\d] -> 1\d{2}
10 - 99 => [1-9][0-9] -> [1-9]\d
0 - 9 => \d
*/

console.log(
  ips.match(
    /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g
  )
);
