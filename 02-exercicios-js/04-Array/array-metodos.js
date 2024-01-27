
//ALGUNS METODOS DE ARRAYS

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop();                   // remove o ULTIMO elemento
pilotos.push('Verstappen');      // adiciona novo elemento
pilotos.shift();                 // remove o PRIMEIROOOO Eelemento
pilotos.unshift('Hamiltton');    // adiciona no PRIMEIRO indice


// SPLICE: pode adicionar e remover elementos

//  splice (a partir de qual elem, qtd a ser excluido, elem a ser adicionado)

    //  adicionar
        pilotos.splice(2, 0, 'Bottas', 'Massa');
    
    //  remover
        pilotos.splice(3, 1);


// SLICE: retorna novo array

    const algunsPilotos = pilotos.slice(2);  //vai pegar a prtir do indice 2

    const algunsPilotos2 = pilotos.slice(1,4);  //pega do 1 ao 3, 4 n entra




    
    console.log(pilotos);
    console.log(algunsPilotos);
    console.log(algunsPilotos2);


