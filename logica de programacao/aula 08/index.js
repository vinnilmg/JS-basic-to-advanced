const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// continue e break => funciona com qualquer estrutura de repeticao
for (let numero of numeros) {
    
    if (numero === 2) {
        console.log("pulei o 2...");
        continue; // pula pra proxima iteracao
    }

    if (numero === 7) {
        console.log("7 encontrado, saindo...");
        break; // sai do laço
    }

    console.log(numero);
}