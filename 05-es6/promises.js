/* PROMISE:

    USA QUANDO QUER TER ALGUM PROCESSAMENTE assíncrono;
    
    O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada.
    Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona.
Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final,
o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.


*/

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, rejeita)=>{
        
        setTimeout(() => {
            resolve(frase);
            //rejeita(frase);
        }, segundos*1000);

    })
}

falarDepoisDe(5, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(`ERRO: ${e}`)); //tratar o caso de erro