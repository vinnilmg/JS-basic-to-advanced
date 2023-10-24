// Objetos: Shallow vs Deep Copy/Clone
const { cloneDeep } = require('lodash');

const person = {
  firstname: 'Marcio',
  lastname: 'Gomes',
  address: {
    line1: 'Av. Brasil',
    line2: 'Centro',
  },
};

//console.log(person);

// Refêrencia ao objeto inicial (link)
const person2 = person;

// Altera os 2 objetos
person2.firstname = 'Marcião';
//console.log(person, person2);

// Shallow Copy
const person3 = { ...person };

// O nome não altera no objeto inicial, mas os objetos dentro deles ficam linkados
person3.firstname = 'Vinicius';
person3.address.line1 = 'Outra rua';
//console.log(person, person3);

// Deep Copy (com lodash)
const person4 = cloneDeep(person);
person4.firstname = 'Maria';
person4.address.line1 = 'Testeee';

console.log(person, person4);
