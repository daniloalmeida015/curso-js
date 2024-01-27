//operador ... rest (juntar)/spread (espalhar)

// usar Rest com parâmetro de função

    /* Pode-se passar vários parametros para uma função usando o operador Rest.
    Ele vai pegar todos estes parametros e juntar em uma estrutura.
    
        minhaFuncao(...parametros)
    
    */

//usar spread com objeto 
    const funcionario = {nome:'Maria', salario:12345.67};
    
    const clone = {ativo: true, ...funcionario}; // vai espalhar todos os funcionarios dentro de clone
    //feito um spread de funcionario

    console.log(clone); //vai conter o ativo e os dados de funcionario

//usar spread com Array

    const grupoA = ['Joao', 'Pedro', 'Gloria'];
    const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];

    console.log(grupoFinal);