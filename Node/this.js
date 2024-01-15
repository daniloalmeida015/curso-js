console.log(this === global);               //falso -> this aponta para module.exports
console.log(this === module);               //false
console.log(this === module.exports);       //true
console.log(this === exports);              //true, pois, exports aponta para a mesma referencia que o module.exports


//this dentro de uma função

function logThis(){
    console.log('Dentro da função');
    console.log(this === exports);  //dentro de uma função, o this NÃOOO aponta para o 'exports'
    console.log(this === module.exports); //false

    console.log(this === global);   //this dentro de uma função aponta para global
}

logThis();

/* Isso não é nenhuma novidade, pois já vimos isso na aula passada. 
Porém, quando falamos de arrow funcions, a coisa muda um pouco.

Isso porque dentro de uma arrow function, o this não vai apontar mais para o objeto global,
 e sim para o module.export / exports. */