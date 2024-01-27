
/* PADRÃO OBSERVER, USADO QUANDO PASSA UMA FUNCAO E ACONTECE UM EVENTE E ELA É CHAMA DE VOLTA */


const notas = [7.7,8.5,5.2,3.6,7.3,9.0];

//extrair as notas menores do que 7

//sem callback
    const notasBaixas = [];

    for(let i in notas){
        if(notas[i]<7){
            notasBaixas.push(notas[i]);
        }
    }

    console.log(notasBaixas);

//usando callback

    const notasBaixas2 = notas.filter( nota=> nota<7);
    console.log(notasBaixas2);
