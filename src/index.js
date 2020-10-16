const express = require('express')

const app = express()

//Configurar pasta pública
app.use(express.static("public"))

//Rotas
app.get("/", (req, res) => {
    //console.log('Servidor iniciado..')

    // return res.render("index.html")

    res.sendFile(__dirname + "/index.html")
})


app.listen(3000)