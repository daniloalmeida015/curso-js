
// ### MÉTODOS DE UM ARRAY

// é constante, mas pode se alterado, mas não adicionado
const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'];


// POP: remove o ULTIMO elemento do Array

    pilotos.pop();

// PUSH: adiciona um elemento na ultima posição do Array

    pilotos.push('Vestappen'); 

    

// SHIFT: remove o elemento da PRIMEIRA posição do Array

    pilotos.shift(pilotos);
    
    
// UNSHIFT: adiciona um elemento na PRIMEIRA POSIÇÃO

    pilotos.unshift('Hammilton');


     // console.log(pilotos);


/** SPLICE:
 *      - Adiciona elementeos em um determinado indice
        - Remove elementos de um Array
        - Adiciona e remove elementos de uma vez
         
      splice(param1,param2, param3)

            param1: indice
            param2: qtd elementos que quer excluir
            param3: elemento que quer adicionar
 */

    // no indice 2, remova zero elem, e adicione 'Bottas' e 'Massa'
    pilotos.splice(2,0,'Bottas', 'Massa');
    console.log(pilotos);

    // no indice 3, remova 1 elemento
    pilotos.splice(3,1);

    console.log(pilotos);


/* SLICE: gera um novo array a partir do indice informado */

    const algunsPilotos1 = pilotos.slice(2);
    console.log(algunsPilotos1);

    // pegue do indice 1 até o indice 4
    const algunsPilotos2 = pilotos.slice(1,4); 
    console.log(algunsPilotos2);