
const escola = "cod3r";

console.log(escola.charAt(4)); //pegar a letra indice 4

console.log(escola.indexOf(3)); //qual a letra no indice 3

console.log(escola.charCodeAt(3)); //pega o valor na tabela ASC unicode

console.log(escola.substring(1)); //imprime a partir do indice 1

console.log(escola.substring(0,3)); //vai do indice 0 a 3, sem o 3

console.log('Escola '.concat(escola).concat("!")); //concatenar

console.log(escola.replace(3,'e'));

//gera um Array de 3 posicoes, usando a ',' para separar
console.log('Ana,Maria,Pedro'.split(','));  //split: quebra a string

