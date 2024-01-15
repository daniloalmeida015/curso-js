// ###  importando dados de outros modulos

    //REQUIRE
    const moduloA = require('./moduloA.js'); //n precisa colocar a exten~sao se o arquivo for .js (padrão)
    const moduloB = require('./moduloB');

    /* usa o ./ para referenciar a pasta onde se encontra o arquivo 'moduloA'
        -- MESMA PASTA, ACESSANDO MODULOA */


    console.log('\n --------------- Modulo A: ----------\n');

    console.log(moduloA);
    console.log(moduloA.ola);
    console.log(moduloA.ateLogo);
    console.log(moduloA.bemVindo)
    
    console.log('\n --------------- Modulo B: ----------\n');

    console.log(moduloB.bomDia);
    console.log(moduloB.boaNoite());
    console.log(moduloB);