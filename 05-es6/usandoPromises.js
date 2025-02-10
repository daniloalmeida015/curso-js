/* 
Obter 3 arquivos json de 3 turmas de alunos diferentes:

    TURMA A
    TURMA B
    TURMA C
    
    http://files.cod3r.com.br/curso-js/turmaA.json
    http://files.cod3r.com.br/curso-js/turmaB.json
    http://files.cod3r.com.br/curso-js/turmaC.json
*/


// refatorando a calbackaninhada.js


// #### EXTRAIR APENAS OS NOMES DOS ALUNOS 

    // USANDO O ESQUEMA DE PROMISES

    const http = require('http'); //http: modulo do node

    const getTurma = letra => {

        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
        
        return new Promise((resolve, reject)=>{

            http.get(url, res => {
                        let resultado = '';
            
                        res.on('data', dados=>{
                            resultado += dados;
                        })
            
                        res.on('end', ()=>{
                            try{
                                resolve(JSON.parse(resultado))
                            } catch(e){
                                reject(e)
                            }
                        })
                    })

        })
    }



    Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //dados vieram como uma matriz
        .then(turmas => [].concat(...turmas))              //concateno pra virarem apenas 1 array
        .then(alunos => alunos.map(aluno => aluno.nome)) //pegando apenas o nome na lista de alunos
        .then(nomes => console.log(nomes))  //exibindo os nomes
        .catch(e => console.log(e.message))


//forçando um erro pra cair no catch ... turma D não existe
getTurma('D').catch(e => console.log(e.message))