

const notas = [6.7, 7.4,9.8,7.7];

// USANDO FOR PADRÃO
for(let i = 0; i <notas.length; i++){
    console.log(`Nota = ${notas[i]}`)
}


// USANDO FOR IN EM UM ARRAY
for(let i in  notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}


// USANDO FOR IN EM UM OBJETO
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
    
}