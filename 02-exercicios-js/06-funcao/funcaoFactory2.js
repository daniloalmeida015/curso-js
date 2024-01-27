//FUNCAO FACTORY: funcao que retorna um objeto

function criarProduto(nome, preco, desconto = 0.1){

    return {    //retorna um obj
        nome: nome,
        preco: preco,
        desconto
    }
}

const produto = criarProduto('Notebook', 2299.49);
console.log(produto);
