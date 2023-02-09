// Encontra todas as palavras (inclusive acentuadas)
const palavras_regEx = /([\wÀ-ú]+)/g;

// Encontra não números
const naoNumeros_regEx = /\D/g;

// Valida CPF
const cpfs_regEx = /(?: \d{3}\.){2}\d{3}-\d{2}/g;

// Valida IPs
const ips_regEx =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida telefone
const telefone_regEx = /^(\(\d{2}\)\s*)?9(\d{4})-(\d{4})$/g;

// Valida senhas fortes
const senha_regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$&%*]).{8,}/g;
