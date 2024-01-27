/* String, Array e Object SÃO funcoes, portanto 
eles tem um atributo chamado PROTOTYPE */

    console.log(typeof String);
    console.log(typeof Array);
    console.log(typeof Object);

/**  PORTANTO, eu posso criar Funcão e atributos
 *  que não tem por padrão na API*/

    //criando uma função que reverte uma string
    String.prototype.reverse = function(){
        //SPLIT quebra string em cada letra
        // transformando em Array
        // o Array possui a funcção REVERSE
        //JOIN junta os elementos
        return  this.split('')
                    .reverse() //ARRY possui o .reverse
                    .join('');
    }

    console.log('Danilo Almeida da Silva'.reverse());


    Array.prototype.pegarPrimeiroelemento = function(){
        return this[0];
    }


    console.log([1,2,3,4,5].pegarPrimeiroelemento());
    console.log(['a','b','c'].pegarPrimeiroelemento());

/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */
/**### NÃOOOO FAÇA ISSO */

    //sobrescrever uma função que já existe, como:

    String.prototype.toString = function(){
        return 'Lascou tudo';
    }

    //vai retornar 'lascou tudo',,,, pois lascou mesmo
    console.log('Teste de reverter'.reverse());


/**### NÃOOOO substitua métodos que já existe */
