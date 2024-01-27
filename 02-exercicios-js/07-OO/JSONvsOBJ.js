/**JSON:    java Script Object Notation
    

    O JSON é um formato textual de dados leve e de fácil 
    leitura utilizado para troca de informações 
    entre sistemas computacionais. 
    Ele é frequentemente usado para transmitir 
    dados entre um servidor e um cliente em 
    aplicações web e móveis, embora também seja 
    utilizado em diversos outros contextos

 */

//CRIAR UM OBETO E TRANSFORMAR PARA JSON

    const obj =  {a:1, b:2, c:3, soma(){return a+b+c}}

    //convertendo par JSON
    console.log("JSON gerado a partir do Objeto:",
                JSON.stringify(obj));

    /** converteu para JSON e excluiu a funcão.
     * JSON é um formato de dados e não algo que é executado.
     * 
     */


// PEGAR UM JSON E GERAR UM OBJETO A PARTIR DELE

    // segue o formato de aspas duplas no campo
    console.log("Objeto gerado a partir do JSON: ",
                JSON.parse('{"a":1,"b":2,"c":3}'));


// possibilidades do JSON
// Atributos delimitados por aspas duplas
// strings delimitados por aspas duplas

    console.log(JSON.parse(
        '{"a":1.7, "b":"string", "c": true, "d":{}, "e": []}'));


//JSON Validator na internet: pra testar