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

//ASYNC AWAIT : recurso do ES8
// objetivo de simplificar o uso de Promises
// transformar seu código Assincrono numa pegada bem mais síncrona


// 1) CRIAR uma função e marcar ela com a palavra Assyn
// Await só vai funcionar em um função marcada com a palavra Async

let obterAlunos = async () => {
    const tumarA = await getTurma('A')
    const tumarB = await getTurma('B')
    const tumarC = await getTurma('C')

    //array com todas tumras juntas
    return [].concat(tumarA, tumarB, tumarC) //retoprna um objeto AsynFunction
}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))