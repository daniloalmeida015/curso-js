//PORQUE EU CRIO UMA CONSTANTE E AINDA POSSO MUDAR
// OS DADOS? TIPO pessoa.nome

    //pessoa aponta para um endereco de memoria
    const pessoa = {nome: 'Joao'};
    console.log(pessoa.nome);

    //pessoa ainda aponta para o mesmo end memoria
    pessoa.nome = 'Pedro';
    console.log(pessoa.nome);

    // NÃO DA CERTO, está tentando adicionar um outro
    // objeto que possui outro end memoria
    
        //  pessoa = {nome: 'Ana'};
    

    // TypeError: Assignment to constant variable.


// AQUI O OBJETO FOI 'CONGELADO', AGORA EU NÃO POSSO
// MAIS MEXER/ALTERAR OS ATRIBUTOS
    Object.freeze(pessoa);

    pessoa.nome = 'Maria';      //não altera
    console.log(pessoa.nome);
    delete pessoa.nome;         //não deleta

    