/* ##  SISTEMA DE MÓDULOS do Node: CommonJS

    - PADRÃO LAYERS
        - DIVISÃO EM CAMADAS    
        - Cada camada com sua responsabilidade.
        - Em Node, um arquivo representa um modulo.
        - Tudo escrito dentro do modulo fica visivel APENAS dentro dele.
        - para tornar disponível/público para outro arquivo
            - precisa Exportar/importar */


// Exportanto algo no Node

    //usando o THIS, essa variavel pode ser acessada em outro arquivo
    this.ola = 'Fala Pessoal';  

    // usando o EXPORTS
    exports.bemVindo ='Bem vindo ao Node';

    //forma mais clássica
    module.exports.ateLogo = 'Até próximo exemplo'

    /* THIS,  EXPORTS e MODULE.EXPORTS são Objetos, portanto, 
    acima 'ola' e 'bemVindo' foram criados dentro desses objetos */

        console.log(typeof(this));
        console.log(typeof(exports));
        console.log(typeof(module.exports));


        // ... continua no ModuloB.js