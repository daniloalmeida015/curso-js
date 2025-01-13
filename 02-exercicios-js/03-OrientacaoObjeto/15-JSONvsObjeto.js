/*  JSON: Java Script Object Notation

        - é um formato textual;
        - diferente da notação literal de objeto;
        - interoperabilidade;
        - Comunicar sistemas feitos em tecnologias diferentes;
        - qualquer linguagem lê este formato;

*/


//1 passo: criar um obj

        const obj = {
            a:1,
            b:2,
            c:3,
            soma(){
                return a+b+c;
            }
        }

//converter o obj para JSON   - JSON.stringify(obj)

        console.log(JSON.stringify(obj));
        // a funcao 'soma' foi excluida do JSON, porque JSON é um formato de dados
        // e não executavel


// Pegar um JSON e transformar em OBJ

      // nome do atributo delimitado por aspas duplas
            console.log(JSON.parse('{"a": 1, "b":2, "c":3}'));
            
            console.log(JSON.parse('{"a":1.7, "b": "uma string aqui", "c": true, "d":{}, "e": []}'));


//
