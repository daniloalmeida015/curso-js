/* laço FOR OF itera em cima de valores e não de índices */


//FOR OF -> iterando em cima de String

    for(let letra of "Cod3r"){
        console.log(letra);
    };



const assuntosEcma = ['Map', 'Set', 'Promise'];

// USANDO FOR IN -> percorre em cima do indice    
    for(let i in assuntosEcma){
        console.log(i);
    }
//usando o FOR OF -> vai percorrer em cima dos valores
    for(let assunto of assuntosEcma){
        console.log(assunto);
    }



// novo Map
    const assuntosMap = new Map([
        ['Map', {abordado:true}],
        ['Set', {abordado:true}],
        ['Promise', {abordado:false}]
    ]);

// ####### FOR OF: percorrendo o Map de algumas formas

    // let of: chave e valor
    for(let assunto of assuntosMap){
        console.log(assunto);
    }

    // let of: chave
    for(let chave of assuntosMap.keys()){
        console.log(chave);
    }

    // let of: valor
    for(let valor of assuntosMap.values()){
        console.log(valor);
    }

    // let of: entries (entradas)
        //posso fazer um DESTRUCTURING [c,v]
    for(let [c,v] of assuntosMap.entries()){
        console.log(c,v);
    }


    // FOR OF em cima de Set
    const set = new Set(['a','b','c']);

    for(let letra of set){
        console.log(letra);
    }