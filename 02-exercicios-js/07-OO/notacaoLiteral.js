/// EXEMPLOS DE ANTES melhorias apos ES6


const a = 1;
const b =2;
const c = 3;

//antes
const obj1 = {a:a,b:b,c:c};
//depois
const obj2 = (a,b,c);

console.log(obj1, obj2);



const nomeAtrib = 'nota';
const valorAtrib = 7.87;

const obj3 = {};
obj3[nomeAtrib] = valorAtrib;
console.log(obj3);

const obj4 = {[nomeAtrib]: valorAtrib};
console.log(obj4);


const obj5 = {
    funcao: function(){
        // ...antes
    },

    funcao2(){
        // ...depois
    }
}

console.log(obj5);