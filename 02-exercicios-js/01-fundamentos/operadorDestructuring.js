/*
    DESTRUCTING:

        Desestruturar
            extrair atributos de um objeto;
            tirar elementos de um array;
            etc;

*/

const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco:{
        logradouro: 'Rua abc',
        numero: 1000
    }
}

//tire o obj pessoa, nome e idade
const {nome, idade} = pessoa;
console.log(nome, idade);

// tirando e mudando nome da variavel
const {nome: nomeTirado, idade: idadeTirada} = pessoa;
console.log(nomeTirado, idadeTirada);


//retirando daods de endereco que esta dentro de pessoa
  //    const {endereco: {logradouro, numero, cep}}= pessoa;

//cep nao existe dentro de endereo, vai trazer UNDEFINED
  //  console.log(logradouro, numero, cep);   

//posso definir um valor padrao
const {endereco: {logradouro, numero, cep=18480}}= pessoa;
console.log(logradouro, numero, cep);  



//  ## extraindo de um Array

const [a] = [10];
console.log(a);

const [n1,, n3,,n5,n6=0] = [10,7,9,8,1];
console.log(n1,n3,n5,n6);


function rand(){
    
}