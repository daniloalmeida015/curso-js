// A notação ponto em JavaScript é usada para acessar propriedades e métodos de objetos. 
console.log(Math.ceil(6.1)); //arredondar

const obj1 = {};
obj1.nome = 'Bola2';

//obj1['nome'] = 'Bola2'; //alternativa para criação de obj

console.log(obj1.nome);

function Obj(nome){

    this.nome = nome; //THIS deixa o atributos público (visivel fora do escopo)
    this.exec = function(){
        console.log('Exec ...');
    }
}


const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec();
