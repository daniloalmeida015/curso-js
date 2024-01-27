//USAR A ULTIMA OPÇÃO DO ES6

//estrategia 1 para pegar valor padrão
const { compact } = require("lodash");

function soma1(a,b,c){
    a = a || 1;
    b = b || 1;
    c = c || 1; 
    /*NÃO É a melhor estrategia para pegar valor
    padrão neste caso, pois se passar valor zero,
    ele entende como falso e usa o valor padrão*/
    return a+b+c;
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0));
/* quando passado o valor zero para o parametro
 ele entende como False e por isso pega
 o valor padrão */



 //estratégia 2, 3 e 4 para pegar valor padrão
 function soma2(a,b,c){

    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    //melhor estrategia nesse caso que precisa ser number
    c = isNaN(c) ? 1 : c; 

    return a+b+c;
 }

 console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0));


 // ES2015 TROUXE POSSIBILIDADE DE VALOR PADRÃO
function soma3(a=1,b=1,c=1){
    return a+b+c;
}


console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0));