const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;

falar(); //conflito entre paradigmas funcional e Oriental a Obj


const falarDePessoa = pessoa.falar.bind(pessoa);

/* 
O método bind em JavaScript é usado para criar uma nova função que, quando chamada, 
terá seu contexto (this) explicitamente definido para o valor especificado.
Passando 'pessoa' como argumento para o 'bind', significa que 
sempre  o 'this' será resolvido pra 'pessoa'*/

falarDePessoa();

/*   'bind' é usado pra amarrar um obj, pra ele ser o dono da execução
    daquele métod sempre que  o métod for chamado.
*/

