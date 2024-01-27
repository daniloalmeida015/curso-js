/* FUNCOES ANONIMAS: funcao sem nome*/


const soma = function(x,y){
    return x+y;
}


const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b));
}

//chama por padrao a func soma no 3 parametro
imprimirResultado(3,4);
//aqui coloco de forma explicita a funcao soma
// no 3 parametro
imprimirResultado(3,4, soma);

//aqui passo outra funcao anonima no 3 parametro
imprimirResultado(3,4, function(x,y){
    return x-y;
})


//passando uma arrow function
    imprimirResultado(3,4,(x,y)=> x*y);


// funcao anonima dentro de um objeto
    const pessoa = {
        falar: function(){
            console.log('Opa!');
        }
    }

    pessoa.falar();