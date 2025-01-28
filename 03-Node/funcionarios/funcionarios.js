
/* TRAZENDO DADOS DE UM ARQUIVO JSON EXTERNO:

    O arquivo traz um json de objetos que possui:
        Nome, sobrenome, email, genero, cidade, país, empresa e salario
      

 */



const url= 'http://files.cod3r.com.br/curso-js/funcionarios.json';

//import { get } from 'axios'; ----> com a versão ES6
const axios = require('axios'); //client http (faz requisições para obter informações de algo que está remoto)


/* ###### DESAFIO ##############

    Trazer a Mulher chinesa com menor salário*/

const chineses = funcionario => funcionario.pais === 'China';
const mulheres = funcionario => funcionario.genero === 'F';
const menorSalario = (funcionario, funcAtual) => {
    return funcionario.salario < funcAtual.salario? funcionario : funcAtual;
}


axios.get(url).then(response => {

    // aqui tenho todos os dados
    funcionarios = response.data;

    /* Trazer a Mulher chinesa com menor salário*/
    const funcionario = funcionarios.filter(chineses)
                                    .filter(mulheres)
                                    .reduce(menorSalario)
    console.log(funcionario);
});





