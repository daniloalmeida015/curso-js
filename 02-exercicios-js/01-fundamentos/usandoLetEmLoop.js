

for(let i=0; i<10; i++){
    console.log(i);
}

// dará erro, pois let nao estara disponivel fora do escopo de bloco

    //  console.log("Valor de i apos sair do loop: "+i);


let funcs = [];

for(let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

//usando let, vai respeitar o valor de i na posicao que foi adicionado
funcs[2]();
funcs[3]();