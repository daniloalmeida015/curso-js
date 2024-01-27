/* -------------------    Como acessar o arquivo 'moduloA.js'. -------------------
    - eu estou dentro da Pastas:

    
            Node
                moduloA.js
                pastaA
                    pastaB
                        acessarModulo.js (estou aqui)
*/

    const moduloA = require('../../moduloA.js');   //respeitar o camelCase
    console.log(moduloA.ola);


//  ------------------- ACESSANDO um modulo -------------------
//        ... no caso, criei um modulo chamado 'saudacao' e dentro dele o arquivo 'index.js'
//        Para acessar o modulo NÃO PRECISA colocar o caminho relativo
//      Dentro do modulo, ele procura o arquivo 'index.js'
            const modulo = require('saudacao');
            console.log(modulo.ola);


    /* Por estar usando o index dentro da pastaC, eu não preciso informar o arquivo.
        -   Basta eu referenciar a pastaC e ele vai procurar dentro de pastaC o arquivo index.js */
        const c = require('./pastaC');
        console.log(c.ola2);



/*  ------------------- MODULOS CORE.   -------------------
        - modulo que já vem com o node */

    // modulo HTTP
        const http = require('http');
        
        //
                http.createServer((req, resp)=> {
                    
                    resp.write('Bom dia pessoal!!!');
                    resp.end(); //finalizar a requisição

                }).listen(8080); //ficar escutando na porta 8080


                // rodar o código e acessar o navegador em 'localhost:8080' para testar