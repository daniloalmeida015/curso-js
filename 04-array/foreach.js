//PRCORRENDO UM ARRAY COM FOREACH

    const listaAprovados = ['Agatha', 'Aldo', 'Danilo', 'Raquel'];

// o ForEach recebe uma Função CallBack como parâmetro
// função callback recebe 3 parametros (Valor, Indice, array)
//posso suprimir parametro

// listaAprovados.forEach(funçãoCALLBACK(valor, indice))

    listaAprovados.forEach(function(valor, indice){ /* para cada elemento do Array, chame a função Callback */
        console.log(`${indice+1}: ${valor}`);
    });

    //usando Arrow Function
        listaAprovados.forEach(valor => console.log(valor));

    //armazenar a função/arrow function em uma variavel e passar para o ForEach
        const exibirAprovados = (valor, indice) => console.log(`${indice+1}: ${valor}`);;

        listaAprovados.forEach(exibirAprovados);