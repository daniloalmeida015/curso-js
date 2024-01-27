function gerarNumsRandomicos({min=0, max=1000}){

    const valor = Math.random() * (max-min)+min;
    return Math.floor(valor);

}

const obj = {max: 50, min:40};
console.log(gerarNumsRandomicos(obj));

console.log(gerarNumsRandomicos({min: 930}));


// desestructuring em Array

function gerarNumsRandomicos2([min=0, max=1000]){

    if(min>max){
         [min,max] = [max,min];
    }
    const valor = Math.random() * (max-min)+min;
    return Math.floor(valor);

}

console.log(gerarNumsRandomicos2([50,40]));
console.log(gerarNumsRandomicos2([570]));
console.log(gerarNumsRandomicos2([,450]));
console.log(gerarNumsRandomicos2([]));