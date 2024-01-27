//funcão comum, adicionada a uma variavel
    let dobro = function(a){
        return 2*a;
    }

// ARROW FUNCTION
    dobro = (a) => {
        return 2* a;
    }

//ainda mais reduzido
// retorno implicito
    dobro = a => 2*a;

console.log(dobro(35));

let ola = function(){
    return 'Olá!';
}

//aqui com Arrow functiom
    ola = () => 'Olá!'; 

console.log(ola());