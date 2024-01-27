console.log(typeof String); //funcao
console.log(typeof Array);  //funcao
console.log(typeof Object); //funcao

// toda funcao tem um atributo chamado .prototype

// n existe essa funcao, vou implementar
//adicionando novas funcoes dentro do prototipo
String.prototype.reverterString = function(){
    return this.split('').reverse().join('');
}

console.log('Escola cod3r'.reverterString());

//criando funcao no prototype
Array.prototype.pegarPrimeiroIndice = function(){
    return this[0];
}

console.log([1,2,3,4,5].pegarPrimeiroIndice());

console.log(['A','b','c','d','e'].pegarPrimeiroIndice());