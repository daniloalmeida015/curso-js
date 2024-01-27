    
    // como criar objeos de forma literal
       //par de chaves representa um obj
       // composto por par chave, valor


    const prod1 = {};   //criei um obj vazio


    /*Mas eu nao tenho o campo 'nome' ??
        -- o campo nome foi criado dinamicamente pelo js*/
    
        prod1.nome = 'Celular Ultra Mega';
        prod1.preco = 4998.90;
        prod1['Desconto legal'] = 0.40; //evitar atributos com espaço

        console.log(prod1);

        const endereco = {
            rua: '2 de abril',
            numero: 7945,
            cidade:{
                nome: 'itaporanga',
                populacao: 20000,
                estado:{
                    nome:'Sao Paulo',
                    sigla: 'SP'
                }
            }

        };

        console.log(endereco);