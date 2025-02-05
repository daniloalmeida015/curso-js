/* Configurar o Express que será nosso servidor web (FRAMEWORK WEB)*/

const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');





/* BODYPARSER: 

    O body-parser é um middleware para Node.js usado no framework Express para processar corpos de requisição HTTP.
    Ele é particularmente útil para lidar com dados enviados via POST, pois permite interpretar diferentes tipos de
    conteúdo no req.body
    
    URLENCODEDE:

    O urlencoded é um middleware usado para processar dados enviados via formulários HTML no formato 
    application/x-www-form-urlencoded. 
    Esse formato é comum quando os dados são enviados através de formulários HTML com o método POST.


1)  instalar a dependência BodyParser.
        No terminal: npm install -save body-parser

2) importar o body parser
        const bodyParser = require('body-parser');

3) fazer uma requisição tipo 'use'
    conforme abaix0, para qualquer requisição que você faça no servidor usando
    Express, vai obrigatoriamente passar pelo bodyParser
*/


// 
app.use(bodyParser.urlencoded({extended: true}));




//requisição get
    //get(caminho, resposta)
        app.get('/produtos', (req, resp, next)=>{
            //resp.send({nome:'Notebook', preco:123.45}); 
            //send -> vai converter para JSON automaticamente
            resp.send(bancoDeDados.getProdutos())
        });

    //pega apenas o produto informado .. no caso o :id quem faz isso,
    // ao passar por exemplo http://localhost:3003/produtos/1
        app.get('/produtos/:id', (req, resp, next)=>{
            resp.send(bancoDeDados.getProduto(req.params.id));
            //o id vem da requisição (req)
        });

    //post , para submeter os dados e salvar novo produto
        app.post('/produtos',(req, resp, next)=>{
            const produto = bancoDeDados.salvarProduto({
                nome: req.body.nome,
                preco: req.body.preco
            });
            resp.send(produto); // vai gerar um JSON, vai converter em um json
        });


        //ALTERAR
        //PUT , para submeter os dados e salvar/alterar
        app.put('/produtos/:id',(req, resp, next)=>{
            const produto = bancoDeDados.salvarProduto({
                id: req.params.id,
                nome: req.body.nome,
                preco: req.body.preco
            });
            resp.send(produto); // vai gerar um JSON, vai converter em um json
        });

        // DELETE ---> Excluir produto 
            app.delete('/produtos/:id',(req, resp, next)=>{
                const produto = bancoDeDados.excluirProduto(req.params.id);
                resp.send(produto); // vai gerar um JSON, vai converter em um json
            });


/*  app.get() 
    app.post()
    app.put()
    app.use() ----> atende todas as requisições (get, post, put ...) */

    app.listen(porta,()=>{
        console.log(`Servidor está executando na porta ${porta}`);
    });

//no postman: testar o get .... http://localhost:3003/produtos


/* ##########  npm i --save body-parser

body-parser: instalar essa dependência
para fazer um parser do lado servidor


*/