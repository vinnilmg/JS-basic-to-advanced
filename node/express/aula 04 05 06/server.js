const express = require('express');

const app = express();

// para tratar parametros recebidos via body
app.use(
    express.urlencoded(
        { extended: true }
    )
);

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/contato', (req, res) => {
    res.send('Contato uhu!');
});

// parametro de url obrigatorio (nao tem '?')
app.get('/obrigatorio/:id', (req, res) => {
    console.log(req.params); // parametros recebidos na URL
    res.send(`Estou recebendo parametros da URL: ${req.params.id}`);
});

// parametro de url opcionais
app.get('/opcional/:idUser?/:nomeUser?', (req, res) => {
    console.log(req.params); // parametros recebidos na URL
    res.send(req.params);
});

// parametros de query -> ex: /?nome=Vinicius&idade=30
app.get('/query', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

// parametros do body -> FORMULARIO
app.get('/body', (req, res) => {
    res.send(
        `<html><body>
            <form action="/body" method="POST">
                Nome: <input type="text" name="nome"> </br>
                Sobrenome: <input type="text" name="sobrenome"> </br>
                Idade: <input type="text" name="idade">
                <button>Envia</button>
            </form>
        </body></html>`
    );
});

// parametros recebidos do formulario
app.post('/body', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));