
//antes do EcmaScript2015

//valor padrao em funcao
function soma1(a,b,c){

    a = a || 1; //caso nao seja passado valor, recebe 1 como padrao
    b = b || 1;
    c = c || 1;

    return a+b+c;
}

console.log(soma1());
console.log(soma1(3));
console.log(soma1(1,2,3));
console.log(soma1(0,0,0));  //entende 0 como false, e retorna o padrao

console.log('-----------------------');

//outra estrategia


function soma2(a,b,c){
    a = a !== undefined? a : 1;     //a é diferente de undefinded?
    b = 1 in arguments? b :1;   // indice 1 esta em arguments? 
    c = isNaN(c) ? 1: c; //c não é um numero? --> mais segura

    return a+b+c;
}

console.log(soma2());
console.log(soma2(3));
console.log(soma2(1,2,3));
console.log(soma2(0,0,0));

console.log('-----------------------');

//      APÓS O  EcmaScript2015

function soma3(a=1,b=1,c=1){
    return a+b+c;
}

console.log(soma3());
console.log(soma3(3));
console.log(soma3(1,2,3));
console.log(soma3(0,0,0));
