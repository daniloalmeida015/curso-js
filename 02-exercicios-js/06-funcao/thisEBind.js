//BIND --- vincular

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}


pessoa.falar();

const falar2 = pessoa.falar;

falar2(); //conflito entre paradigmas: funcional e OO

//COMO RESOLVER? usando Bind

    const falarDePessoa = pessoa.falar.bind(pessoa);

    falarDePessoa();

    /*  No Bind você passa o obj que quer que 
    seja resolvido no THIS*/

