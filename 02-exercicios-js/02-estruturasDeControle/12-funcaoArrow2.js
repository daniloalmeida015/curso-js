

//ARROW FUNCTIONS veio a partir do ES2016 (ES6)

/* OBJEIVOS:
        
        - ser mais curta, sintaxe reduzida;
        - this associado ao contexto no qual a funcao foi escrita;

*/



/* usando a ARROW FUNCTION, independente de o codigo estar sendo chamado a partir de um temporizador,
 o this vai apontar para pessoa, pois o arrow foi definido no contexto
  de pessoa.*/

        function Pessoa(){
            this.idade = 0;

            setInterval(()=>{
                this.idade++;
                console.log(this.idade);
            }, 1000);
        }

        new Pessoa;

