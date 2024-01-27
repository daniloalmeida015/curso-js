/* 
    ##  FUNÇÕES ARROW
        
        - Sintaxe mais reduzida
        - Funções anônimas
            Não tem como atribuir nome;
        - É atribuida para uma variavel constante
        - 1 único parâmetro não é obrigado a colocar os parenteses
            Mais de 1 é obrigatório
        - Função com corpo:
            obrigatório colocar o return
            de uma linha o retorno é implicito
*/

    const soma = (a,b) => a+b;
    console.log(soma(2,3));

    /* ARROW FUNCTION (THIS) 

        - this de uma função arro está associado ao local onde a função foi escrita
        - 
    
    */
    const lexico1 = ()=> console.log(this === exports);
    /* THIS sempre apontará para exports/module.exports
        
    Mesmo tentando forçar com o bind*/
    const lexico2 = lexico1.bind({});

    lexico1();
    lexico2();



    // ###### SE FOSSE UMA FUNÇÃO TRADICINAL o this aponta para Global



    // Parametro default
        function log(texto = 'Node'){
            console.log(texto)
        }

    log(); //assume valor padrão
    log(null); //fica null
    log(undefined); //assume valor padrão
    log('Sou mais forte que o valor padrão!');


    // ### operador Rest/Spread

        function total(...numeros){
            let total = 0;   
            numeros.forEach(n => total +=n);
            return total;
        }

        console.log(total(1,2,3,4,5));
        