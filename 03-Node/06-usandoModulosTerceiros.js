// referenciar a biblioteca usando o underline _

const _ =  require('lodash'); // a partir disso tenho a disposição o lodash


//funções do 'lodash'

//RANDOM _.random()

    setInterval(() => {
        console.log(_.random(1,10))
    }, 2000);

    //vai sortear um valor randomico entre 1 e 1000 a cada 2000ms (2s)