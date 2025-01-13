
//mesmo sem receber parametros, posso passar parametros ... só JS mesmo kk


/* ARGUMENTS:   se for passado parametros,
usando o arguments consegue captura-los*/
function soma(){
    let total = 0;
    for(i in arguments){
        total += arguments[i];
    }
    return total;
}


console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.3));
console.log(soma(2,34,'Aqui Concatena'));
console.log(soma('a','b','c'));