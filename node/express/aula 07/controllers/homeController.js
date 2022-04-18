exports.paginaInicial = (req, res) => {
    res.send(
        `<html><body>
            <form action="/" method="POST">
                Nome: <input type="text" name="nome"> </br>
                Sobrenome: <input type="text" name="sobrenome"> </br>
                Idade: <input type="text" name="idade">
                <button>Envia</button>
            </form>
        </body></html>`
    );
}

exports.envioFormulario = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}