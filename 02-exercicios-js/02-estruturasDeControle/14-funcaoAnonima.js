
/* FUNCAO ANONIMA: FUNCAO SEM NOME;

POSSO ADICIONAR UMA FUNCAO ANONIMA DENTRO DE UMA VARIAVEL */

const soma = function(x,y){
    return x+y;
}

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(3,4); //como nao passei terc param, vai usar soma
imprimirResultado(3,4,soma);
//passando uma funcao anonima como parametro, diretamente
imprimirResultado(3,4, function(x,y){
    return x-y;
});

//passando uma arrow function
imprimirResultado(3,4,(x,y)=>x*y);


//funcao anonima como atributo de um obj
const pessoa = {
    falar: function(){
        console.log('Opa');
    }
}

pessoa.falar();