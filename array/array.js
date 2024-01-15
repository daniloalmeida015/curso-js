console.log(typeof Array);          //funcao
console.log(typeof new Array);      //objeto
console.log(typeof []);             //objeto



let aprovados = new Array('Bia', 'Carlos', 'Ana'); //instanciando --
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']; //forma literal --- MELHOR

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // indice 3 não existe -- em js ele mostra como Undefine e não da erro


//INSERINDO VALORES NO ARRAY -------------------------
    //inserindo 'Paulo' no indice 3 
    /// mais apropriado pra alterar um valor do indice
    //se o indice existir ele substitui
        aprovados[3] = 'Paulo'; 

    //PUSH ele insere o valor no FIM do Array .. no caso indice 4
    // mais apropriado pra ADICIONAR novo valor ao Array
        aprovados.push('Abia'); 



// tamanho do Array
    console.log(aprovados.length); 


//  ########## e se adicionar elemente na posição indice 9

    // vai dar certo, mas os indices 5,6,7,8 ficarão como UNDEFINED
        aprovados[9] = 'Rafael'; 

        console.log(aprovados[7] === undefined); //verdadeiro

        console.log(aprovados[7] === null); //falso

        console.log(aprovados);


// ORDENANDO UM ARRAY ------------------ SORT
    /*  - VAI ordenar o Array.
        - Altera o PRÓPRIO ARRAY
        - algumas outras funções retornam um novo array e não alteram o original  */
    aprovados.sort(); 
    console.log(aprovados);



// DELETANDO VALORES DO ARRAY ------------------------- 

    //DELETA mas não reordena o array, apenas coloca 'undefined' na posição excluida
        delete aprovados[1]; 

        console.log(aprovados[1]);


        

        /** SPLICE:
                - Adiciona elementeos em um determinado indice
                - Remove elementos de um Array
                - Adiciona e remove elementos de uma vez
         
                splice(param1,param2, param3)

                param1: indice
                param2: qtd elementos que quer excluir
                param3: elemento que quer adicionar
         */

        aprovados = ['Bia', 'Carlos', 'Ana'];
        console.log('ARRAY ANTES: ',aprovados);

        // PARA EXCLUIR COM SPLICE
            aprovados.splice(1,1); //Exclui 1 elemento a partir do indice 1 splice(indice, qtd)
        
        console.log('ARRAY DEPOIS: ',aprovados);

        //PARA ADICIONAR
            aprovados.splice(1,0, 'Arnaldo', 'Cesar', 'Coelho'); // a partir do indice 1, exclua 0, e adicione => 'Arnaldo', 'Cesar', 'Coelho'
            console.log('array depois: ', aprovados);

            aprovados.splice(1,2,'Pelé'); // a partir do indice 1, exclua 2 ELEMENTOS, e adicione => 'Pelé'
            console.log('array depois .....: ', aprovados)