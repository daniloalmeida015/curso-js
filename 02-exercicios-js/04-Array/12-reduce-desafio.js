Array.prototype.meuReduce = function(callback){
    let acumuldaor = this[0];

    for(let i =1; i< this.length; i++){
        acumuldaor = callback(acumuldaor, this[i], i, this);
    }

    return acumuldaor;
}



const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 9.7, bolsista: true}
];

//todos os alunos são bolsistas? responda usando o reduce
const isTodosBolsistas = function(acumulador, atual){
    return acumulador && atual;
};


const soma = (total, valor) => total+valor;

let resultado = alunos.map(a => a.bolsista).meuReduce(isTodosBolsistas);
//let resultado = alunos.map(a => a.nota).meuReduce(soma);

console.log(resultado)