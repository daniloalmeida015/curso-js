
const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0];

//sem callBack

    const notasbaixas1 = [];

    for(let i in notas){
        if(notas[i] < 7){
            notasbaixas1.push(notas[i]);
        }
    }

    console.log(notasbaixas1);

//com callBack

    const notasBaixas2 = notas.filter(function(nota){
        return nota < 7;
    })

    console.log(notasBaixas2);

// com CallBack e usando Arrow Function

    const notasBaoxas3 = notas.filter(nota => nota < 7);
    console.log(notasBaoxas3);    
