let valor; //nao inicializado
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);

//  console.log(valor.toString()); //ERRO


const produto = {};
console.log(produto.preco); //undefined

// console.log(produto.preco.desconto); 
// TypeError: Cannot read properties of undefined 


produto.preco = 33.5;
console.log(produto);

produto.preco = undefined; //evite definir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);

