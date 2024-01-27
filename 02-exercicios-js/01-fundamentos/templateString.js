const nome = "Rebeca";

const concatenacao = "olá "+nome+"!";

//usando template string
//  abrir com ``
//  suporta quebras de linha
//  pode-se colocar expresssoes


const template = `
    Olá
    ${nome}!`;

    console.log(concatenacao, template);

console.log(`Soma = ${1+1}`);   //  pode-se colocar expresssoes


//funcao
const praMaiusculo = texto => texto.toUpperCase();


// da pra chamar funcao dentro de um templateString
console.log(`Ei ... ${praMaiusculo('cuidado')}`);