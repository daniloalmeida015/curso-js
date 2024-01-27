/*  MAP:
        - Seve para fazer uma transformação no Array;
        - Mapear um array para outro array de mesmo tamanho,
            mas com os dados transformados;
        - gera um NOVO ARRAY;
        - nao altera o array atual
        
*/

const numeros = [1,2,3,4,5];

//gerar um array onde cada elemento é o dobro do original

let resultado = numeros.map(function(elemento){
    return elemento*2;
});



console.log(resultado);
console.log();


const soma10 = e => e + 10;
const triplo = e => e*3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);