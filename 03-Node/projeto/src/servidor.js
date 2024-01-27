/* Configurar o Express que será nosso servidor web */

const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

/* URLENCODED: função middleware
    o retorno dela vai ser uma função 
    middleware que vai fazer um parser no body da requisição
     */
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
            //o id vem da rquisição (req)
        });

    //post , para submeter os dados e salvar novo produto
        app.post('/produtos',(req, resp, next)=>{
            const produto = bancoDeDados.salvarProduto({
                nome: req.body.nome,
                preco: req.body.preco
            });
            resp.send(produto); // vai gerar um JSON, vai converter em um json
        });


        //PUT , para submeter os dados e salvar novo produto
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