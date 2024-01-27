//FUNCAO FACTORY: funcao que retorna um objeto

function criarPessoa(nome, sobrenome){

    return {    //retorna um obj
        nome: nome,
        sobrenome: sobrenome
    }
}

const pessoa1 = criarPessoa('Danilo', 'Almeida');
console.log(pessoa1);
