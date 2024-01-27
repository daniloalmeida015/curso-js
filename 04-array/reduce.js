/* REDUCE:
    -  O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array,
     resultando num ÚNICO VALOR DE RETORNO.
     
    A função reducer recebe quatro parâmetros:

        Acumulador (acc)
        Valor Atual (cur)
        Index Atual (idx)
        Array original (src)
    
        O valor de retorno da sua função reducer é atribuída ao acumulador. 
    O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array,
    que por fim, se tornará o valor resultante, único, final.
*/



    const listaAlunos = [
        {nome: 'João', nota: 7.3, bolsista: false},
        {nome: 'Maria', nota: 9.2, bolsista: true},
        {nome: 'Pedro', nota: 9.8, bolsista: false},
        {nome: 'Ana', nota: 8.7, bolsista: true}
    ];


    console.log(listaAlunos.map(aluno => aluno.nota)); // [ 7.3, 9.2, 9.8, 8.7 ]

    /*o ACUMULADOR será o elemento de indice 0 --> 7.3,
    após a primeira vez ele será o valor do retorno, no caso 7.3 + 9.2 = 16.5
    */
    const resultado = listaAlunos.map(aluno => aluno.nota)
                                .reduce(function(acumulador, valorAtual){
                                    console.log(acumulador, valorAtual);
                                    return acumulador+valorAtual;
                                });

    console.log('Resultado da soma: ',resultado)