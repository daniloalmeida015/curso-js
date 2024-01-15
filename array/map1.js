
/* FUNÇÃO MAP:
    -= Serve para transformar um Array;
    - Mapeia o Array;
    - Cria um NOVO Array de MESMO tamanho;
    - Com os dados TRANSFORMADOS;
*/

//array de numeros
    const nums = [1,2,3,4,5];

// map é um 'for com propósito' map(funcão callback) e a funçãoCallback(valor, indice, array)
    
    //EXERCICIO: retorne um novo array que dobre os valores do array nums
    let resultado = nums.map(function(valor){
        return valor*2;
    });

    console.log('Array original: ',nums,'\nNovo Array: ',resultado);


//criando funções para passar no maps de forma sucessiva/encadeada
    
    const soma10 = valor => valor+10;

   
    const triplo = valor => valor*3;

    const paraDinheiro = valor => 
        `R$ ${parseFloat(valor)         //transforma para float
            .toFixed(2)                 //fixa 2 casas decimais
            .replace('.', ',')}`;       //troca . por , para ficar padrão Brasileiro


    /* O resultado do retorno do primeiro Map é um Array, portanto,
         posso passar de forma encadeada pra outro Map */
    resultado = nums.map(soma10)
                    .map(triplo)
                    .map(paraDinheiro);

    console.log('Array original: ',nums,'\nNovo Array: ',resultado);