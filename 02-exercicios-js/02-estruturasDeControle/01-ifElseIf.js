
Number.prototype.estaEntre = function(inicio, fim){
    return this >= inicio && this <= fim;
}


const imprimirResultado = function(nota){

    if(nota.estaEntre(9,10)){
        console.log('Quadro de honra!');
    } else if(nota.estaEntre(7,8.99)){
        console.log('Aprovado!');
    } else if(nota.estaEntre(4,6.99)){
        console.log('Recuperação!');
    } else if(nota.estaEntre(0,3.99)){
        console.log('Reprovado!');
    } else{
        console.log('Nota inválida');
    }

    //console.log('Fim');

}

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
