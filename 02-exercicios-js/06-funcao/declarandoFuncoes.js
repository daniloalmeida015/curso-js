// FORMAS DE SE DECLARAR FUNCOES EM JAVASCRIPT


    console.log(somar(3,4));

// forma normal - function declaration
// pode ser chamada antes de declarada
//carregada antes de executar o código
    function somar(x,y){
        return x+y;
    }



// Funcção anonima ... que pode ser atribuida a uma variavel
// function expression
//carregada pós executar o código

    console.log(subtrair(3,2)); 
    // erro .. a funcção ainda não foi declarada

    const subtrair = function(x,y){
            return x-y;
    }

//MISTURANDO AS DUAS --- NAMED FUNCTION EXPRESSION
//****** muitopouco usada
// function expression
//carregada pós executar o código

    console.log(multiplicar(3,2)); 
    // erro .. a funcção ainda não foi declarada


    const multiplicar = function mult(x,y){
        return x*y;
    }


// 