const objetoA = {
    chaveA: 'A'
};

const objetoB = {
    chaveB: 'B'
};

const objetoC = new Object();
objetoC.chaveC = 'C';

// setando prototype de B como A e de C como B
Object.setPrototypeOf(objetoB, objetoA);
Object.setPrototypeOf(objetoC, objetoB);

// acessando variavel de outro objeto
console.log(objetoB.chaveA); 
console.log(objetoC.chaveA);

// pegando prototype
console.log(Object.getPrototypeOf(objetoB));
console.log(Object.getPrototypeOf(objetoC));