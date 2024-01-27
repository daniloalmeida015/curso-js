Array.prototype.meuReduce = function(callback, valorinicial){

  const indiceInicial = valorinicial? 0 : 1;
  let acumulador = valorinicial || this[0];
  
  for(let i=indiceInicial;i < this.length; i++){
    acumulador = callback(acumulador, this[i], i, this);
  }

  return acumulador;
}


const soma = (total, valor) => total+valor;
const nums = [1,2,3,4,5,6];
console.log(nums.meuReduce(soma));

let valorInicial = 12;
console.log(nums.reduce(soma, valorInicial)); //com valor inicial setado
