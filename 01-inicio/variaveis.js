

{   //      criando variaveis
    
    var nome = "Caneta";
    var quantidade = 10;
    var preco = 6.4;
    var imposto = 1.5;
    var precoFinal = preco+imposto;
    var desconto = 0.2;
    var precoComDesconto = preco * (1-desconto) + imposto;

        console.log("Nome: "+nome);
        console.log("Quantidade: "+quantidade);
        console.log("Preço: "+preco);
        console.log("Imposto: "+imposto);
        console.log("Preco sem desconto: "+precoFinal);
        console.log("Desconto: "+desconto);
        console.log("Preço com desconto: "+precoComDesconto);
}

{   //modificanto o valor da variavel

        let nomeVar = "variavel"
        nomeVar = " Novo nome";

        console.log("Novo nome: "+nomeVar);
}

{   //  Forma mais moderna de definir variavel; usando let

    let teste = "teste let";

    console.log(teste);
}

{   //  CONSTANTES EM JAVASCRIPT

    const PI = 3.14;

    //  PI = 12.1;  ---->  vai dar erro, pois constante n pode ser alterada;
}


{   //TIPAGEM FRACA

    /*  mais flexivels
        mais dificel detectar alguns tipos de bugs/erros */

        let qualquer = "Legal";
        console.log(qualquer);
        console.log(typeof qualquer);

        qualquer = 3.15;
        console.log(qualquer);
        console.log(typeof qualquer);

        qualquer = true;
        console.log(qualquer);
        console.log(typeof qualquer);


}