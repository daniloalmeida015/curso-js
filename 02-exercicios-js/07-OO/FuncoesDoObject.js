/* LAGUMAS FUNCOES DO OBJECT*/


const pessoa = {
    nome: 'Rebeca',
    idade: 15,
    peso: 55
}


// pegando as chaves do objeto
    console.log(
        Object.keys(pessoa)
    )

// pegando os valores do objeto
    console.log(
        Object.values(pessoa)
    )

// pegando as chaves e valores do objeto
    console.log(
        Object.entries(pessoa)
    )


    //usando FOREACH para percorrer o Objeto
        Object.entries(pessoa).forEach(e => {
            console.log(`${e[0]}: ${e[1]}`);
        })

    //usando DESTRUCTURING
        Object.entries(pessoa).forEach(([chave,valor]) => {
            console.log(`${chave}: ${valor}`);
        })


// OBJECT DEFINE PROPERTY

    Object.defineProperty(
        pessoa, 
        'dataNascimento', 
        {
        enumerable: true,
        writable: false,
        value: '01/01/2019'
    });

    pessoa.dataNascimento = '01/01/2025';
    console.log(pessoa.dataNascimento);

    console.log(
        Object.keys(pessoa)
    )

    console.log(
        Object.values(pessoa)
    )


//OBJECT ASSIGN
    const objDestino = {a:1};
    const obj1 = {b:2};
    const obj2 = {c: 3, a:4};

    Object.assign(objDestino, obj1, obj2);
    console.log(objDestino);

    //concatena os objetos no objDestino ...
    // os dados, se repetidos, sobrescreve o valor anterior