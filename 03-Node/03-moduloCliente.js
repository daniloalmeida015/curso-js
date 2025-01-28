// ###  importando dados de outros modulos usando commonJS

    //REQUIRE
    const moduloA = require('./01-moduloA.js'); //n precisa colocar a extensão se o arquivo for .js (padrão)
    const moduloB = require('./02-moduloB');

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