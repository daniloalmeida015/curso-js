//funcoes de objetos

const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa));       //pega chaves do Obj
console.log('--------------------------------------------');



console.log(Object.values(pessoa));     //pega valores
console.log('--------------------------------------------');


console.log(Object.entries(pessoa));    //pega lsta chave/valor
console.log('--------------------------------------------');


//percorrer cada elemento
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});
console.log('--------------------------------------------');

//ou USANDO o operador Destructuring para pegar chave e valor
Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave}: ${valor}`);
})

console.log('--------------------------------------------');
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,   //se vair ser listado
    writable: false,    //pode ser alterada
    value: '01/01/2019'
});

//n vai ser alterada,
pessoa.dataNascimento = '01/01/2017';

console.log(pessoa.dataNascimento);


console.log('--------------------------------------------');

// Object.assign (ES2015)

const destino = {a:1};
const obj1 = {b:2};
const obj2 = {c: 3, a:4};

//vai mesclar os dois objetos no objResultante
// 'destino' vai receber os atributos de obj1 e obj2
const objResultante = Object.assign(destino, obj1, obj2);


console.log(objResultante);

console.log('--------------------------------------------');


//não vai alterar, pois obj esta freeze( congelado)
Object.freeze(objResultante);
objResultante.c= 1234;

console.log(objResultante); //nao mudou