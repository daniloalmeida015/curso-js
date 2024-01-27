
/* ARRAY:

    - em JS é um Objeto com indice 
    - estrutura dinamica;
    - estrutura indexada;
    - estrutura heterogenea;
    - mas por boa pratica, se deve lidar com daos homogeneos;
    - 
*/


console.log(typeof Array, typeof new Array);

let aprovados = new Array('Bia', 'Carlos', 'Ana'); //forma não mt recomendada
console.log(aprovados);


aprovados = ['Bia', 'Carlos', 'Ana'];           //forma literal, recomendada no dia dia
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);                      //undefined

aprovados[3] = 'Paulo';                         //adicionar elemento
aprovados.push('Rafael');                       //adicionar (MELHOR FORMA)
console.log(aprovados.length);                  //tamanho do Array

console.log('Antes ordenar: '+aprovados);
    aprovados.sort();                           //ordenar o Array
console.log('Apos ordenar: '+aprovados);

delete aprovados[1];                            //delete, coloca undefined na posicao deletada
console.log(aprovados);    

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados);  

aprovados.splice(1,2);                          //deleta a partir do indice uma qtd informada
// a partir odo indice 1 excluir 2 elementos

console.log(aprovados);  

aprovados = ['Bia', 'Carlos', 'Ana'];

aprovados.splice(1, 2, 'Carlos novo', 'Ana nova');
//exclui, a aprtir do indice 1 2 elem, e adiciona novos

console.log(aprovados);  



