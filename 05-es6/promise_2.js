

/* EXECUTAR uma chamad a cada 2 segundos ...
usando Callback aninhadas ficaria igual abaixo ..

CHAMADA DE CALBACK HELL: conhecido como callback do inforno*/


        /*    setTimeout(() => {
                
                console.log('Executandi callback ...')

                setTimeout(() => {
                    console.log('Executando callback ...')
                    
                    setTimeout(() => {
                        console.log('Executando callback ...')
                        
                    }, 2000);

                }, 2000);
                
            }, 2000); */


/* AGORA USANDO Promise

*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){

        setTimeout(() => {
            
            console.log('Executando a promise ...')
            resolve('Vissshhh')

        }, tempo);

    })
}

esperarPor(3000)
    .then(texto =>esperarPor())
    .then(esperarPor)