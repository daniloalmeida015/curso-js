//


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "caneta", "preco": 7.50}'
];

//retornar, usando o Map, um array apenas com os precos

const jsonParaObj = json => JSON.parse(json);

const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(jsonParaObj).map(apenasPreco);

console.log(resultado);