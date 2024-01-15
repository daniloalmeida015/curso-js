/* Middleware Pattern (chain of responsability)/Cadeia de responsabilidade
*/
//funções middlewares

const passo1 = (contexto, proximoPasso) => {
    contexto.valor1 = 'mid1';
    proximoPasso();
}

const passo2 = (contexto, proximoPasso)=>{
    contexto.valor2 = 'mid2';
    proximoPasso();
}


const passo3 = contexto => contexto.valor3 = 'mid3';

//função para executar os middlewares

    const executarMiddleware = (contexto, ...middlewares) => {

        const executarPasso = indice =>{
            middlewares &&
            indice < middlewares.length &&
            middlewares[indice](contexto, ()=> executarPasso(indice+1));
        }

        executarPasso(0);

    }

    const ctx = {};
    executarMiddleware(ctx, passo1, passo2, passo3);
    console.log(ctx);
