/** COMO EVITAR MODIFICAÇÕES? */


/**OBJECT.PRIVATEEXTENSIONS: 
 * Não vai permitir que seu Objeto seja aumentado.
 * Seja extendido
 * Não vai conseguir aumentar/adicionar novos atributos
*/

    const produto = Object.preventExtensions({
        nome: 'Qualquer',
        preco: 1.99,
        tag: 'promocao'
    })

    console.log('ANTES: ', produto, '\n');

    //retorna FALSE, pois n]ap é um Obj extensivel
    // por conta o preventeExtensions
        console.log('Extensivel: ', Object.isExtensible(produto));

    // PERMITE alterar os dados
        produto.nome = 'Borracha';
    
    //NÃO PERMITE adicionar novos atributos 
        produto.descricao = 'Borracha escolar branca';

    // PERMITE deletar atributos
        delete produto.tag;

        console.log('\n DEPOIS:', produto);



/**OBJECT.SEAL ----- SELAR
 * NÃO CONSEGUE:
 *      Adicionar atributos
 *      Excluir atributos
 
    CONSEGUE:
        Modificar os valores dos atributos
 * 
 */

    const pessoa = {
        nome: 'Juliana',
        idade: 34}

        Object.seal(pessoa);

        console.log('Selado? ', Object.isSealed(pessoa));
        
        //consigo
        pessoa.nome = 'Danilo';
        pessoa.idade = 30;

        //não consigo
        pessoa.novoAtributo = 'novo atrib';
        delete pessoa.nome;

        console.log('\n', pessoa);


/**object.freeze COMPLETAMENTE CONGELADO / CONSTANTE
 
    NÃO CONSEGUE:
        incluir novos valores
        excluir atributos
        modificar
*/

Object.freeze(pessoa);

    pessoa.nome = 'Maria';      //não altera
    
    delete pessoa.nome;         //não deleta


    console.log('\n objeto congelado: ', pessoa);