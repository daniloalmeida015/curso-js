
const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Kit de lápis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}'
];



/*  RETORNAR UM ARRAY APENAS COM OS PREÇOS*/

    const JSONParaObjeto = json => JSON.parse(json);    //transforma o JSON em Objeto

    const apenasPreco = produto => produto.preco;       //traz apenas o campo preço do objeto

    
    let resultado = carrinho.map(JSONParaObjeto)
                            .map(apenasPreco);

    console.log(resultado);