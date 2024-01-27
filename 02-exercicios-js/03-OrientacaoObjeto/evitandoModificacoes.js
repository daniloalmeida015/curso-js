/*  Object.preventExtensions: 
    - não vai permitir que seu Obj seja extendido a qtd de atributos;
    - pode excluir;
    - mas não pode adicionar  */

    const produto = Object.preventExtensions({
        nome: 'Qualquer',
        preco: 1.99,
        tag: 'promoção'
    });


    console.log('Extensivel: ', Object.isExtensible(produto));


    //tentando modificar
        produto.nome = 'Borracha';                      //permite alterar
        produto.descricao = 'Borracha escola branca';   //NÃO permite adicionar

        delete produto.tag;                             //permite excluir

        console.log(produto);
    

    /*  Object.seal (selar) 
            -> não pode adicionar,
            -> não pode excluir
            
            -> mas pode modificar

    */
        const pessoa = {
            nome: 'Juliana',
            idade: 35
        }

        Object.seal(pessoa);    // selando pessoa

        console.log('Selado: ', Object.isSealed(pessoa));

        pessoa.sobrenome = 'Silva'; //n permite
        delete pessoa.nome;         // n permite

        pessoa.idade = 29;          //permite


        console.log(pessoa);


/*Object.freeze     
    OBJETO CONSTANTE:
        - n pode ser modificado os atributos;
        - n pode adicionar atributos;
        - n pode excluir atributos*/
        

        