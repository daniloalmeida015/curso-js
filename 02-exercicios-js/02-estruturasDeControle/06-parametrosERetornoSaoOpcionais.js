

//PARAMETROS E RETORNO EM JS SÃO OPCIONAIS

    function area(largura, altura){
        const area = largura*altura;

        if(area > 20){ //aqui n retorna
            console.log(`Valor acima permitido: ${area}m2.`);

        } else{ //aqui retornei
            return area;
        }

    }

    console.log(area(2,2));
    console.log(area(2));   //NaN
    console.log(area());    //NaN
    console.log(area(2,31,55,78));  //pega os dois primeiros
    console.log(area(5,5));