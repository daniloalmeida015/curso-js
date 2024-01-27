/*  CLOSURES:   fechamento

        - é o escopo criado quando uma funcção é declarada;
        - esse escopo permite a funcao acessar e manipular 
        variaveis externas à funcao;


*/

//EXEMPLO:

    const x = 'Global';

    function fora(){
        const x = 'Local';

        function dentro(){
            return x;
        }

        return dentro;
    }

    const minhaFuncao = fora();
    console.log(minhaFuncao());
