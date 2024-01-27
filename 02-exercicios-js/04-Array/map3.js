// implementar proprio metodo map

Array.prototype.meuMap = function(callback){
    const novoArray = [];

    for(let i=0; i< this.length; i++){
        novoArray.push(callback(this[i], i, this));
    }
    return novoArray;
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "caneta", "preco": 7.50}'
];

//retornar, usando o Map, um array apenas com os precos

const jsonParaObj = json => JSON.parse(json);

const apenasPreco = produto => produto.preco;

const resultado = carrinho.meuMap(jsonParaObj).meuMap(apenasPreco);

console.log(resultado);