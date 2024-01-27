const listaAlunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]


//IMPERATIVO    
    let total1 = 0;
    for(let i=0; i< listaAlunos.length; i++){
        total1 += listaAlunos[i].nota;
    }

    const media1 = total1/listaAlunos.length;
    console.log('IMPERATIVO:',media1);


//DECLARATIVO - promove o reuso

    const getNota = aluno => aluno.nota;
    const soma = (total, atual) => total+atual;

    const total2 = listaAlunos.map(getNota).reduce(soma);
    const media2 = total2/listaAlunos.length; 
    console.log('DECLARATIVO: ',media2)

