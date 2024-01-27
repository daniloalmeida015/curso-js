
const listaAlunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
];

//DESAFIO 1: Todos os alunos são bolsistas?

const todosBolsistas = (acumulador, bolsista) => acumulador && bolsista;
    const res = listaAlunos.map(alunos => alunos.bolsista).reduce(todosBolsistas);
    console.log("Todos os alunos são bolsistas? ",res);

//DESAFIO 2: algum aluno é bolsistas?

const algumBolsista = (acumulador, bolsista) => acumulador || bolsista;

    const res2 = listaAlunos.map(alunos => alunos.bolsista).reduce(algumBolsista);
    console.log("Algum aluno é bolsista? ",res2);