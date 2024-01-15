 // DESAFIO: criando minha função que faça o trab do foreach

    Array.prototype.meuForEach = function(callback){
        for(let i=0; i<this.length; i++){
            callback(this[i], i, this);
        }
    }

const listaAprovados = ['Agatha', 'Aldo', 'Danilo', 'Raquel'];

    listaAprovados.meuForEach(function(valor, indice){ /* para cada elemento do Array, chame a função Callback */
        console.log(`${indice+1}: ${valor}`);
    });

   
        //listaAprovados.meuForEach(valor => console.log(valor));

  