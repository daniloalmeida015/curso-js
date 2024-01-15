/* TAGGED TEMPLATE: processa uma template string dentro de uma função.


Construir uma função que vai fazer um parse em todas as variáveis interpoladas
e vai aplicar uma máscara de dinheiro emcima delas.
*/


function real(partes, ...valores){
    const resultado = [];
    valores.forEach((valor, indice)=>{
        valor = isNaN(valor)? valor: `R$${valor.toFixed(2)}`;
        resultado.push(partes[indice], valor);
    });

    return resultado.join('');
}

const preco = 29.99;
const precoParcela = 11;

console.log(`1X de ${preco} ou 3X de ${precoParcela}.`);
console.log(real `1X de ${preco} ou 3X de ${precoParcela}.`);