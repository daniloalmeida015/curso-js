
/* PADRÃO OBSERVER, USADO QUANDO PASSA UMA FUNCAO E ACONTECE UM EVENTE E ELA É CHAMA DE VOLTA */



const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice){
    console.log(`${indice+1}, ${nome}`);
}


// o evento é cada um dos elementos percorridos no Array, a partir do foreach
fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricante){
    console.log(fabricante);
});

fabricantes.forEach(fabricante => console.log(fabricante));