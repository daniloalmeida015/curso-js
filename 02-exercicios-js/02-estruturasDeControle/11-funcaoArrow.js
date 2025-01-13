

//ARROW FUNCTIONS veio a partir do ES2016 (ES6)

/* OBJEIVOS:
        
        - ser mais curta, sintaxe reduzida;
        - this associado ao contexto no qual a funcao foi escrita;

*/

// funcao normal
    let dobro = function a(){
        return 2*a;
    }

// funcao arrow
    dobro = (a) => {    //deve ser armazenada em uma variavel ou constante
        return 2*a;
    }

// forma mais reduzida ainda
    dobro = a => 2*a;   //retorno implicito, funcao de 1 unica linha

console.log(dobro(Math.PI));


// funcao normal
    let falar = function (){
        return 'olá';
    }

//funcao arrow
    falar = () => 'Olá';

console.log(falar());

