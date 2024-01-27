
//OBJETC.CREATE

const pai = {nome: 'Pedro', corCabelo: 'Preto'};

//vai criar filha, com atributos do pai , heranca
const filha1 = Object.create(pai);

filha1.nome = 'Ana';

console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
});

console.log(filha2.nome);
filha2.nome='Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);


console.log(Object.keys(filha1));

console.log(Object.keys(filha2));

for(let chave in filha2){
    //console.log(chave);

    filha2.hasOwnProperty(chave) ? 
        console.log(`Atributo proprio: ${chave}`): 
        console.log(`Por herança: ${chave}`);
}