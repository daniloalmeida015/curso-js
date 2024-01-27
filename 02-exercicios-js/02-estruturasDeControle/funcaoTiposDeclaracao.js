
/*  
    FORMAS DE DECLARAR FUNÇÕES    
*/

console.log(soma(1,20));    //consigo chamar aqui
console.log(subtrair(1,20));    //erro, n declarada
console.log(multplicar(1,20));  //erro, n declarada

//  function declaration (TRADICIONAL)
//      posso antes de declarar, chamar ela, pois o JS carrega tds funcoes
//      antes de executar o codigo
    
    function soma(x,y){
        return x+y;
    }

//  function expression
//      delcara uma funcao anonima e atribui a uma variavel ou const
// só pode ser chamada após declarada

    const subtrair = function(x,y){
        return x-y;
    }
    console.log(subtrair(1,20));


//  named function expressio (menos usada)

    const multplicar = function multiplicar(x,y){
        return x*y;
    }
    console.log(multplicar(1,20));
