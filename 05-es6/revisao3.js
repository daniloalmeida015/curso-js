//ES8: Object.values/Object.entries

/* 
Object.values: Pega o valor do objeto
Object.entries: pega chave e valor */

const obj = {a:1, b:2, c:3};

console.log(Object.keys(obj))            //já existia: Retorna as chaves
console.log(Object.values(obj));    // retorna os valores
console.log(Object.entries(obj));   // retorna uma matriz de chave e valor


// ## Melhorias na Notação Literal de Objeto

const nome = 'Carla';

//antes
const pessoa1 = {
    nome: nome,
    ola: function(){

    }
}
//depois
const pessoa2 = {
    nome,
    ola(){

    }
}

//Class
    class Animal{};

    class Cachorro extends Animal{
        falar(){
            return 'Au Au!';
        }
    }

    console.log(new Cachorro().falar());
