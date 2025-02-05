const sequencia = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const listaProdutos = {};
// CRUD:

// CREATE E UPDATE
function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequencia.id;
    }
    listaProdutos[produto.id] = produto;
    return produto;
}

// READ
function getProduto(id){
    return listaProdutos[id] || {};
}

//READ
function getProdutos(){
    return Object.values(listaProdutos);
}

//DELETE
function excluirProduto(id){
    const produto = listaProdutos[id];
    delete listaProdutos[id];
    return produto;
}

//EXPORTANDO PARA FORA: estarão visíveis fora do arquivo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto};