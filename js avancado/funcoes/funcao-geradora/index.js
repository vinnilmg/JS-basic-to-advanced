function* gerador1() {
    yield 1;
    yield 2;
    yield 3;
}

// função gerador que chamada outro gerador
function* gerador2() {
    yield* gerador1();
    yield 4;
    yield 5;
    yield 6;
}

const g1 = gerador1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().done); // Done: true

console.log('\ncom FOR');
for (let valor of gerador1()) {
    //console.log(valor);
}

const g2 = gerador2();
for (let valor of g2) {
    console.log(valor);
}