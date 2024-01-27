/* FILTER: 
    - SERVE PARA FILTRAR UM ARRAY;
    - RETORNA UM NOVO ARRAY, QUE PODE SER IGUAL OU MENOR QUE O ARRAY PASSADO.
    - O RESULTADO DEVE SER V OU F */


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4100, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}
];


console.log(produtos.filter(function(p){
    return p.fragil;
}));

console.log(produtos.filter(function(p){
    return p.preco < 1000;
}));


const isCaro = function(p){
    return p.preco > 1000 && p.fragil;
};
const isFragil = function(p){
    return p.fragil;
};


console.log(produtos.filter(isCaro).filter(isFragil));