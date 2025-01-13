{   //JS TEM TIPAGEM FRACA

    /*  mais flexivel
        pode ter mais de um tipo, uma hora ser number e depois String
        JavaScript permite conversões implícitas entre tipos diferentes (coerção de tipos)
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