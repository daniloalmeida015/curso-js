const a =1;
const b =2;
const c = 3;

const obj1 = {
    a:a,
    b:b,
    c:c
}

//a partir do ES2015 não preciso mais fazer assim, posso definir como abx

const obj2 = {
    a,
    b,
    c
}

console.log(obj1, obj2);
// isso indidca de forma implicita que vai assumir o nome do 
// atributo dentro do obj.
// caso queira mudar o nome do atributo, usar a primeira notação de cima

const nomeAtributo = 'nota';
const valorAtributo = 7.87;

const obj3 = {};
obj3[nomeAtributo] = valorAtributo;
console.log(obj3);

const obj4 = {[nomeAtributo]: valorAtributo};
console.log(obj4);


const obj5 = {
    funcao1: function(){
        // forma anterior (tradicional)
    },
    funcao2(){
        // forma mais curta (ES2015)
    }
}

console.log(obj5);