

//ARROW FUNCTIONS veio a partir do ES2016 (ES6)

/* OBJEIVOS:
        
        - ser mais curta, sintaxe reduzida;
        - this associado ao contexto no qual a funcao foi escrita;

*/

// --------------------------------------------------------
let comparaComThis = function (parametro){
    console.log(this === parametro);
}

//aqui o 'this' aponta para global
comparaComThis(global);


const obj = {};
//aqui dou um bind (mudando a referencia do this) e passa a apontar para o obj
comparaComThis = comparaComThis.bind(obj);

//entao aqui da false, pois saiu do contexto global
comparaComThis(global);
//aqui da true, pois agora aponta para obj
comparaComThis(obj);


//  usando ARROW FUNCTION
let comparaComThisArrow = parametro => console.log(this === parametro);


comparaComThisArrow(global);             //false, aponta direto pro contexto da funcao
comparaComThisArrow(module.exports);      // true