const fs = require('fs');

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

// como pegar este obj e persistir/salvar ele no disco?????????????
// .writeFile(diretorio, arquivo, callback)

    fs.writeFile(__dirname+'/arquivoGerado.json', JSON.stringify(produto), erro => {
        console.log(erro || 'Arquivo Salvo!');
    });