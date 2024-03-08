const express = require('express')
const app = express()
// faz um 'parser' no corpo da requisição request e joga dentro do 'request.body'
// quando eu acessar 'request.body' vou ter acesso a todos os dados do fomulario que eu submeti
const bodyParser = require('body-parser')

// associando o bodyparser
app.use(bodyParser.urlencoded({ extended: true }))

// atendendo a url /usuarios usando método post
// atendendo uma requisição do tipo POST em cima da url /usuarios
app.post('/usuarios', (req, resp) => {
    // req.body pra ver o que chegou no body da requisição
    console.log(req.body)
    console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    // envia a resposta
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

// informa a porta que ficará escutando
//mesma porta informada no form
app.listen(3003) 