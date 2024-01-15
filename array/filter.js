/* FILTER:
 - Filtrar um Array
 - Para obter um subArray
 - Uma qtd de elementos menores ou igual baseado em algum critério
 -   */


 const listaProdutos = [
    {
    nome: 'Notebook',
    preco: 2499,
    fragil: true
    },
    {
        nome: 'iPad pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de plástico',
        preco: 18.99,
        fragil: false
        }
 ];



 console.log(listaProdutos.filter(function(produto){
    /* se retornar verdadeiro, estará no Array final.
        se retornar falso é retirado no array final */

    return false;

 }))



//retornar os elementos >= 500 reais e frageis

const isFragil = produto => produto.fragil;
const isCaro = produto => produto.preco>=500;

console.log(
            listaProdutos
            .filter(isCaro)
            .filter(isFragil)
            );