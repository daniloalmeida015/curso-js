
// fs é o modulo interno que já vem no node

const { isUtf8 } = require('buffer');
const fs = require('fs');

const caminho = __dirname + '/arquivo.json';    //__dirname -> representa o diretorio atual

// LENDO ARQUIVO

    //forma SINCRONA: 
    //  trava o eventLoop, fica parado de forma sincrona esperando 
    //  ler o arquivo completamente para só então despachar para a proxima requisição
    //NÃO RECOMENDADO

        const conteudo = fs.readFileSync(caminho, 'utf-8');
        console.log(conteudo);      
  

    //FORMA ASSINCRONA --- melhor

        fs.readFile(caminho, 'utf-8', (erro, conteudo)=> {
            const config = JSON.parse(conteudo);
            console.log(`${config.db.host}: ${config.db.port}`);
        });


    // No caso de um arquivo json, eu nem precisaria fazer o processo acima
        
        const config = require('./arquivo.json');
        console.log(config.db);


//LENDO UMA PASTA

        // readdir(diretorio, callback)
        fs.readdir(__dirname, (erro, arquivos)=> {
            console.log('Conteudo da pasta: ');
            console.log(arquivos)
        })