
{   //  funcao sem retorno

    function imprimirSoma(a,b){
        console.log(`${a} mais ${b} é igual a: `+ (a+b) +'\n');
    }

    imprimirSoma(100,12);

    imprimirSoma(2);   // NaN Not a number
   //ERRO!,,,, mas posso passar somento 1 parametro
   imprimirSoma(); //NaN
}




{//  FUNCAO COM RETORNO

    function soma(a, b=0){   //b com valor padrao 0
            return a+b;
    }

    console.log(soma(2,3));  
    console.log(soma(4));    //pega b como padrao
}




{//  armazenando uma funcao em uma variavel

    const imprimirSoma2 = function(a,b){
                            console.log(a+b);
                        }
}

{//  armazenando uma funcao ARROW em uma variavel

    const soma2 = (a,b) => {return a+b};

    console.log(soma2(10,20));
}

{// ARROW FUNCTION retorno implicito
    
    const subtracao = (a,b) => a-b;

    console.log(subtracao(10,5));
}