const express = require('express')
const app = express()

//Configurar pasta pública
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

//Rotas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.listen(3000)