
//FUNCAO: 

    function MueObjeto(){

    }

    console.log(MueObjeto.prototype);

//instanciado objetos a partir de uma funcao

    const obj1 = new MueObjeto();
    const obj2 = new MueObjeto();

//apontam para o mesmo prototipo (MeuObjeto.prototype)
    console.log(obj1.__proto__ === obj2.__proto__);
// o prototipo do obj aponta para a função construtora
    console.log(MueObjeto.prototype === obj1.__proto__);




    MueObjeto.prototype.nome = 'Anonimo';
    MueObjeto.prototype.falar = function(){
        console.log(`Bom dia. Meu nome é: ${this.nome}!`);
    }


// obj1 e obj2 terão acesso a funcção e variavel acima

    obj1.falar();

    obj2.nome = 'Joao'; //sobrescritar de nome
    obj2.falar(); 

    const obj3 = {};
    /* mudando a referencia do prototipo do obj3, para sair de 
    Object.prototype para MeuObjeto.prototype*/
        obj3.__proto__ = MueObjeto.prototype;
        obj3.nome = 'obj3';
        obj3.falar();



/* RESUMO DA LOUCURA */

    // um novo Objeto instanciado a partir de uma funcao construtor
    //aponta para o prototype da funcao
        console.log((new MueObjeto).__proto__ === MueObjeto.prototype);
    // o prototype da função construtora aponta para o 
    // prototype de Function
        console.log(MueObjeto.__proto__ === Function.prototype);
    // o Prototipo de function aponta para o prototype de Object
        console.log(Function.prototype.__proto__ === Object.prototype);
    //por fim, o prototipo de Object aponta para Null
        console.log(Object.prototype.__proto__ === null);
