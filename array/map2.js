

//CRIANDO MEU PRÓPRIO MAP - para entender seu funcionamento
 
    Array.prototype.meuMap =  function(callback){
        const novoArray = [];
        for(let i=0; i<this.length; i++){
            novoArray.push(callback(this[i], i, this));
        }

        return novoArray;
    }


// Strings no formato JSON
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
                            .meuMap(apenasPreco);   //aqui eu uso meu map criado

    console.log(resultado);