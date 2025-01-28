console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;              //ficará visivel fora do arquivo
exports.b = 2;           //ficará visivel fora do arquivo
module.exports.c = 3;    //ficará visivel fora do arquivo


exports = null;

    console.log(module.exports);
/* Mesmo setando NULL para 'exports', o 'module.exports' continua apontando para a variavel setada anteriormente.
PORQUE?
    - exports é outra variável que aponta para o mesmo Objeto   */