const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')(); //invocando a função Factory
const contadorD = require('./instanciaNova')();



/* 1º CASO: Simplesmente exportei um Objeto no Node e ele faz Cache desse objeto.
Se este objeto já estiver sido criadom, ele retorna sempre a mesma instancia*/
    contadorA.incrementar();
    contadorA.incrementar();
    console.log(contadorA.valor,contadorB.valor)

/*2º CASO: Novas instancias criadas a partir de uma Factory */
    contadorC.incrementar();
    contadorC.incrementar();
    console.log(contadorC.valor, contadorD.valor);