/* 
Obter 3 arquivos json de 3 turmas de alunos diferentes:

    TURMA A
    TURMA B
    TURMA C
    
    http://files.cod3r.com.br/curso-js/turmaA.json
    http://files.cod3r.com.br/curso-js/turmaB.json
    http://files.cod3r.com.br/curso-js/turmaC.json
*/

// #### EXTRAIR APENAS OS NOMES DOS ALUNOS 

    // USANDO O ESQUEMA DE CALLBACK AO INVES DE USAR PROMISE

    const http = require('http'); //http: modulo do node

    const getTurma = (letra, callback) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
        
        http.get(url, res => {
            let resultado = '';

            res.on('data', dados=>{
                resultado += dados;
            })

            res.on('end', ()=>{
                callback(JSON.parse(resultado));
            })
        })
    }

    let nomes = [];

    getTurma('A', alunos => {
        //console.log(alunos);
        nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`));
        console.log(nomes);
        getTurma('B', alunos =>{
            nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
            console.log(nomes);

            getTurma('C', alunos =>{
                nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
                console.log(nomes);
            });
        });

    })