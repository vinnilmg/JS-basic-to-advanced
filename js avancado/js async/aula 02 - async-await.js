// Async => indica que é uma funcao assincrona (permite a utilizacao do "await")
// Await => "espera" a promise ser finalizada 
// Estados das promises: 
// Pending -> Pendente
// Fullfilled -> Resolvida
// Reject -> Rejeitada

function aguardar(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Mensagem deve ser string!')); // chama o catch

        setTimeout(() => {
            resolve(msg + " PASSEI NA PROMISE"); // chama o then
        }, tempo);
    });
}

async function executaPromises() {
    try {
        const p1 = await aguardar('Promise 1', 3000);
        console.log(p1);

        const p2 = await aguardar('Promise 2', 1000);
        console.log(p2);

        const p3 = await aguardar('Promise 3', 2000);
        console.log(p3);

        console.log("Finalizado.");
    } catch (e) {
        console.log("Erro:", e); // se der erro cai neste catch 
    }
};

executaPromises(); // funcao assincrona
console.log("Executei");

const p = aguardar('Promise demorada', 5000);
console.log(p); // Promise está PENDENTE pois não aguardei a finalização da execução com await ou then