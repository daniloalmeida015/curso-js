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

let resultado = alunos.map(a => a.bolsista).reduce(isTodosBolsistas);

console.log(resultado);

// algum aluno é bolsista?

resultado = alunos.map(a => a.bolsista).reduce((acumulador, atual) => acumulador || atual);

console.log(resultado);