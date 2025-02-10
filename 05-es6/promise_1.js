//funções

function primeiroElemento(array){
    return array[0]
}

let primeiraLetra = palavra => palavra[0]

let letraMinuscula = letra => letra.toLowerCase()



//criando a promise
/*  */

let promessa = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia','Carla', 'Daniel'])
})



//chamando a promise
// MÉTODO THEN: recebe uma função como parâmetro
// o valor passado para a função THEN é o valor recebido da Promise

promessa //recebido o array de nomes da Promisse -- ['Ana', 'Bia','Carla', 'Daniel']
    .then(primeiroElemento) // recebe o Array e pega o primeiro elemento do Array -- 'Ana'
    .then(primeiraLetra) //recebe o primeiro elemento e pega a primeira letra -- 'A'
    .then(letraMinuscula) //pega essa letra e transforma essa letra em minuscula - 'a'
    .then(console.log) //pega essa letra e exibe a letra no console  - 'a'