
///LEts ENCRYPT -- opção gratuita para gerar certificado digital válido https


/* Novos recursos do ES6, ES7 e ES8 

    ##   LET e CONST
 
        var --> tem escopo de função/global
        let --> escopo de bloco
*/

        {
            var a = 2;
            let b = 3;
        }
  /*  
        console.log(a); ---> consegue acessar
        console.log(b); --> não consegue acessar
    
    ## TEMPLATE STRING
*/
        const produto = 'iPad';
        console.log(`${produto} 
        é caro`); //pode quebra linha

/*
    ## OPERADOR DESTRUCTURING
*/
        
        const [l, e, ...tras] = "Cod3r";
        console.log(l,e,tras);

        const [x, ,y] = [1,2,3];
        console.log(x,y);
        
        const {idade: i, nome} = {nome: 'Ana', idade:9};
        console.log(i, nome);

    
    