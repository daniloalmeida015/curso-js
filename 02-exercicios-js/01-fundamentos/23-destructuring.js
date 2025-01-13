//DESTRUCTURING: Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

//destructuring: 
/* Retire nome e idade de pessoa e atribua nas variaveis
 'nomeRetirado' e 'idadeRetirada' respectivamente */
const {nome: nomeRetirado, idade: idadeRetirada} = pessoa
console.log(nomeRetirado, idadeRetirada)


/* e se pessoa não tiver os atributos informados?*/
const {sobrenome, bemHumorada = true} = pessoa

/* sobrenome receberá 'undefined' e bemHumorada receberá true por padrão */

console.log(sobrenome, bemHumorada)


// e para acessar os atributos dentro de endereço?

const {endereco: {logradouro, numero, cep}} = pessoa

console.log (logradouro)
console.log(numero)
console.log(cep) // undefined
