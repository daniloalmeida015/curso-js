// tipo number - numerico

console.log(Number.isInteger(1.0));   //vai ser true, por mais que tenha 1.0
console.log(Number.isInteger(2.0));   //vai ser true

console.log(Number.isInteger(2.1));   //vai ser false
console.log(Number.isInteger(1.01));   //vai ser false


console.log("------------------------------------");
console.log("------------------------------------");

const peso1 = 1.0;
const peso2 = Number('2.0');

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1*peso1 + avaliacao2*peso2;
const mediaPonderada = total/(peso1+peso2);



//  Definir qtd casas decimais   ->      toFixed()    
console.log("Media Ponderada: "+mediaPonderada.toFixed(2));
//  converter para String
console.log(mediaPonderada.toString); 
//  converter para String VALOR BINARIO 
console.log(mediaPonderada.toString(2)); 




    