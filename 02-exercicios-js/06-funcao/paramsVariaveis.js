function soma(){
    let total = 0;
    
    for(i in arguments){
        total += arguments[i];
    }

    return total;
}


console.log(soma()); 
console.log(soma(1));
console.log(soma(1.1,2.2,3.3)); //retorna a soma
console.log(soma(1.1,2.2,'teste')); //soma os dois primeiros e concatena com 'teste'
console.log(soma('a','b','c')); //pega o zero e concatena com 'abc'

