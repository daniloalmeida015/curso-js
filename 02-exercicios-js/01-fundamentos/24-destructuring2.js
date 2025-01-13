// destructuting como parâmetro de Função

function valorRandomico ({min = 0, max = 1000}){

    const valor = Math.random() * (max-min) +min;
    return Math.floor(valor);
}


const obj = {
    max: 50,
    min:40
};

console.log(valorRandomico(obj));
console.log(valorRandomico({min:955}));
console.log(valorRandomico({}));
console.log(valorRandomico()); //erro 


