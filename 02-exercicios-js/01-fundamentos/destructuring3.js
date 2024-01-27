//DESTRUCTURING com Arrays


function valorRandomico([min=0, max=1000]){

    if(min > max){
        [min, max] = [max,min]; 
    }
    const valor = Math.random() * (max-min) + min;

    return Math.floor(valor);
}


console.log(valorRandomico([50,40]));
console.log(valorRandomico([992]));
console.log(valorRandomico([,10]));
console.log(valorRandomico([]));
console.log(valorRandomico()); //erro
