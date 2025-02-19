// referenciar a biblioteca usando o underline _

const _ =  require('lodash'); // a partir disso tenho a disposição o lodash


//funções do 'lodash'

//RANDOM _.random()

    setInterval(() => {
        console.log(_.random(1,10))
    }, 2000);

    //vai sortear um valor randomico entre 1 e 1000 a cada 2000ms (2s)



/** NODEMON
 * 
 * 
 * O Nodemon é uma biblioteca para Node.js que facilita o processo de desenvolvimento de aplicativos ao monitorar automaticamente alterações nos arquivos do projeto e reiniciar o servidor quando necessário. Ele é especialmente útil para agilizar o ciclo de desenvolvimento, já que elimina a necessidade de reiniciar manualmente o servidor sempre que uma alteração no código é feita.

Principais Características
Monitoramento Automático: Observa alterações em arquivos do projeto, como .js, .json e outros.
Configuração Flexível: Permite personalizar os arquivos e pastas que devem ser monitorados.
Suporte a Variáveis de Ambiente: Pode carregar variáveis de ambiente automaticamente.
Extensões Personalizadas: Pode ser configurado para observar tipos específicos de arquivos, como .ts ou .jsx.
Integração Simples: Funciona com praticamente qualquer aplicativo Node.js.

Como Instalar
Para instalar o Nodemon, você pode usar o gerenciador de pacotes npm. Ele pode ser instalado globalmente ou como dependência de desenvolvimento no projeto:

Instalação global:

bash
Copiar
Editar
npm install -g nodemon
Instalação no projeto (como dependência de desenvolvimento):

bash
Copiar
Editar
npm install --save-dev nodemon
Como Usar
Para executar um arquivo com o Nodemon:

bash
Copiar
Editar
nodemon app.js */