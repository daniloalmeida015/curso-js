const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];



// PERCORRENDO O ARRAY COM FOREACH

    aprovados.forEach(function(nome, indice){
        console.log(`${indice+1}: ${nome}`);
    });

    console.log();

// PASSANDO ARROW FUNCTION
    aprovados.forEach((nome, indice)=>{console.log(nome, indice)});
    console.log();

const exibirParovados =(nome, indice ) => console.log(`${indice+1}: ${nome}`);
aprovados.forEach(exibirParovados);