function area(largura, altura){
    const area = largura*altura;

    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`);
    } else{
        return area;
    }
}


console.log(area(2,2));
console.log(area(2));               //NaN
console.log(area());                //NaN
console.log(area(2,6,8,4,9,11));    //pega os dois primeiros e descarta o restante
console.log(area(5,5));
