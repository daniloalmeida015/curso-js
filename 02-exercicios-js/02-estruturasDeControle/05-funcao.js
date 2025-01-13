// Funcao em JS é First-Class Object (citizens)
// funcao é um cidadão de primeira classe
// se fosse um país, funcao seria o presidente


//criando funcao de FORMA LITERAL
function funcao1(){}

//posso armazenar funcao em uma variavel
const funcao2 = function (){}

//posso armazenar em um Array
const meuArray = [function (a,b){return a+b}, funcao1, funcao2];
console.log(meuArray[0](2,3));

//posso armazenar em um atributo de um objeto
const obj = {}; 
obj.falar = function(){return 'Opa ...'};
console.log(obj.falar());

// passar funcao como parametro de outra funcao
function executar(funcaoRecebida){
    funcaoRecebida();
}

executar(function(){console.log('Executando ...')});


// uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

soma(2,3)(4);
// ou assim
const somaMais = soma(2,3);
somaMais(4);