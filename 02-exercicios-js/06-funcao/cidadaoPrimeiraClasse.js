// FUNÇÃO em JS é first-class Object - Objeto de primeira ordem
// Higher-order Function
// Codadão de primeira classe


/* FUNÇÃO em JS é um dado (especia) como qualquer outro.
Pode ser passado como parâmetro.
Pode ser armazenado em uma variável */

// CRIAR DE FORMA LITERAL
    function funcao1(){};

//ARMAZENAR EM UMA VARIAVEL
    const funcao2 = function(){};

//ARMAZENAR EM UM ARRAY
    const vetor = [function(a,b){return a+b}, funcao1, funcao2];
    console.log(vetor[0](2,3));

//ARMAZENAR EM UM ATRIBUTO DE UM OBJETO
    const obj = {};
    obj.falar = function(){return 'Opa'};
    console.log(obj.falar());

//PASSAR A FUNCAO COMO PARAMETRO
    function executar(funcao3){
        funcao3();
    }

    executar(function(){console.log('Executando !!!')});


//UMA FUNCAO PODE RETORNAR/CONTER UMA FUNÇÃO
    function soma(a,b){
        return function(c){
            console.log(a+b+c);
        }
    }

    // posso chamar diretamente
    soma(3,4)(5);
    // ou, posso armazenar em uma const e depois chamar
    const resultadoMais = soma(3,4);
    resultadoMais(5);



