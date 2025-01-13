

for(var i=0; i<10; i++){
    console.log(i);
}

console.log("Valor de i apos sair do loop: "+i);


var funcs = [];

for(var i=0; i<10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

//usando VAR, nao vai respeitar o valor de i na posicao que
// foi adicionado, portanto vai receber o valor ao sair do loop (10)
funcs[2]();
funcs[2]();
