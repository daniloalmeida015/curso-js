/* objecto MAP: O objeto Map contém pares de chave-valor e lembra a ordem original da inserção das chaves.
 
QUALQUER VALOR (objetos e valores primitivos) podem ser usados como chave ou valor. 

Um objeto Map itera seus elementos na order da inserção - um loop for...of retorna um array de [key, value] para cada iteração
*/

    const tecnologias = new Map();
    tecnologias.set('react',{framework: false});
    tecnologias.set('angular', {framework: true});

    console.log(tecnologias.react); //undefined
    console.log(tecnologias.get('react'));
    console.log(tecnologias.get('react').framework);

//criar o Map() já atribuindo os elementos
//Criando abaixo um new Map que contém um array de arrays:
//  e cada Array com chaves Variadas, o que não é possível em um objeto normal
    /*
      new Map( [
        [c,v],
        [c,v],
        [c,v]
    ]

    */
    const chavesVariadas = new Map([
        [function(){}, 'Função'],
        [{}, 'Objeto'],
        [123, 'Número']
    ]);


    chavesVariadas.forEach((valor, chave)=>{
        console.log(chave, valor);
    });


    //has -> pra ver se contém o elemento que for passado
    console.log(chavesVariadas.has(123));

    //delete -> para excluir um elemento
    chavesVariadas.delete(123);

    console.log(chavesVariadas.has(123));

    //size -> quantos elementos o Map possui
    console.log(chavesVariadas.size);


    //Map não aceita repetição na chave
    chavesVariadas.set(123,'a');
    chavesVariadas.set(123,'b');    //vai substituir o valor anterior, pois, não pode ter elementos de mesma chave

    console.log(chavesVariadas);