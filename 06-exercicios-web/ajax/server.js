//responsavel por fazer o parser do corpo da requisição
//se eu fizer um 'request' e mandar dados dentro dele ele vai interpretar
// estes dados e deixar esses dados prontos para serem manipulados
const bodyParser = require('body-parser');

//importando o servidor 'express'
const express = require('express');


//instanciar o 'express' e coloca-lo em uma variavel
const app = express();

/*  MIDDLEWARES

    definindo os 'middlewares' que vão ser aplicados sempre que acontecer uma requisição
    'middlewares' nada mais é que uma função que será executada quando uma determinada requisição chegar
    pode ser um middleware aplicado a algum determinado padrão de URL
    ou pode ser aplicado para todas as requisições que chegarem ao servidor

 */

    // static('.') : dentro da pasta atual sirva os arquivos estaticos
        app.use(express.static('.'));

    //bodyParser

        // se vier algum formato a partir de SUBMIT de formulario, lê os dados e transforma em objeto
        // vai ser aplicado para qualquer requisição que chegar no servidor
        app.use(bodyParser.urlencoded({extended: true}));
        // app.use('/teste',bodyParser.urlencoded({extended: true})); se usasse assim seria apenas para o /teste

        //se vier um JSON dentro do body da requisição vai transformar o json para objeto
        app.use(bodyParser.json());


        // quando vier uma requisição do tipo GET na url '/teste': chame essa função
        app.get('/teste', (requisicao, resposta) => resposta.send('OK')); //função vai retornar 'ok'

       
        // upload usando o xmlHTTPRequest
        //importar o 'multer' para interpretar o formulario que vem o arquivo do upload
        const multer = require('multer');


        //criar uma configuração usada par a pasta que vai salvar os arquivos e para personalizar o nome do arquivo
        const storage = multer.diskStorage({

            destination: function(requisicao, arquivo, callback){
                callback(null, './upload'); //'./upload' pasta de destino. No caso a pasta 'upload'
            },
            filename: function (req, file, callback){
       
                let nomeNovo = `${Date.now()}_${file.originalname}`;

                callback(null, nomeNovo );
            }
        })


        //vai interpretar o arquivo que vai vir a partir da requisição ajax com o nome 'arquivo'
        // O método single('arquivo') indica que será permitido apenas um arquivo ser enviado através do formulário com o nome 'arquivo'.
        // Isso significa que o servidor esperará receber um arquivo com o campo de formulário chamado 'arquivo'.
        const upload = multer({storage}).single('arquivo');




        //requisição via 'post'
        app.post('/upload', (req, res)=> {
            upload(req, res, err =>{
                if(err){
                    return res.end('Ocorreu um erro!');
                }

                res.end('Concuido com sucesso!');
            })
        });


        //recebendo dados da minha página. 
        // preciso do bodyParser já configurado acima
        app.post('/formulario', (req, res) => {
            //retornar os mesmos dados, em um objeto {} para a página
            res.send({
                ...req.body,  //... operador spread tudo que veio na requisição
                id: 1
            })
        })



        app.get('/parOuImpar',(req, res) => {
            
            //dentro do Express existe algumas formas de receber dados do frontend
                // req.body
                // req.query        ---> app.get('parOuImpar?numero=12'
                // req.params       ---> app.get('parOuImpar/:parametro'

            //recebendo a partir da query
            const par = parseInt(req.query.numero) % 2 === 0;

            res.send({
                resultado: par ? 'par': 'impar'
            })
        })



        const porta = 3000;
        //startar o servidor
        app.listen(porta, () => console.log(`Servidor executando na porta: ${porta}`));

        //'npm start' no terminal: vai rodar o script 'start' no 'package.json' que esta definido para rodar o 'server.js'


        // SE A PORTA ESTIVER EM USO????????????????
        /* 
        Para verificar se uma porta específica está em uso no Windows, você pode usar o comando netstat em conjunto
         com alguns parâmetros adicionais para filtrar as informações exibidas. Por exemplo, se você quiser verificar se 
         a porta 80 está em uso, você pode fazer o seguinte:

            Abra o Prompt de Comando.
            Digite o seguinte comando e pressione Enter: 
            netstat -ano | findstr :80

            Este comando irá filtrar a saída do netstat para exibir apenas as linhas que contenham a porta 80. 
            Se houver alguma conexão utilizando a porta 80, ela será listada junto com o PID (Identificador de Processo) correspondente.


            Depois de identificar o PID do processo, você pode encerrá-lo usando o comando taskkill. 
            Execute o seguinte comando no Prompt de Comando como administrador, substituindo <PID> pelo 
            PID do processo que você deseja encerrar:

            taskkill /PID <PID> /F

            O parâmetro /F força o encerramento do processo. 
        */

