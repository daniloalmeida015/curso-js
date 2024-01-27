/* SET: 
    - não aceita repetição
    - não é indexado  
    
    O objeto Set permite que você armazene valores únicos de qualquer tipo,
     desde valores primitivos a referências a objetos.

     Objetos Set são coleções de valores nas quais é possível iterar os elementos em ordem de inserção.
      Um valor no Set pode ocorrer apenas uma vez; ele é único na coleção do Set.
    
    */



const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Vasco'); //não vai adicionar

console.log(times);
console.log(times.size);
console.log(times.has('Vasco')); //true
console.log(times.has('vasco')); //false
times.delete('Flamengo');
console.log(times.has('Flamengo'));