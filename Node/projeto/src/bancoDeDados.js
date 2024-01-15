const sequencia = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const listaProdutos = {};

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequencia.id;
    }
    listaProdutos[produto.id] = produto;
    return produto;
}


function getProduto(id){
    return listaProdutos[id] || {};
}

function getProdutos(){
    return Object.values(listaProdutos);
}

function excluirProduto(id){
    const produto = listaProdutos[id];
    delete listaProdutos[id];
    return produto;
}

//estarão visíveis fora do arquivo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto};