/*  em JavaScript o Arrya é:

        - Heterogeneo: aceita varios tipos
        - flexivel: nao tem tamanho fixo

*/

const valores = [7.7,8.9,6.3,9.2];  //add varios elementos

valores[4] = 12;                //adiciona na posicao
valores.push(10);               //adiciona novos elemetos array
console.log(valores.length);    //tamanho do array

//  aceita valores heterogeneos
//  não é uma boa pratica
    valores.push(true);
    valores.push("ABC");
    valores.push(null);

// excluir do array
    valores.pop();      //excluir o ultimo elemento 
    delete valores[0];  //excluir o elemento no indice informado


console.log(valores);