
//seria como uma classe em java
function Carro(velocidademaxima = 200, delta = 5){


    //atributo privado
    let velocidadeAtual = 0;

    //metodo publico ... usar this
        this.acelerar = function(){
            if(velocidadeAtual + delta <= velocidademaxima){
                velocidadeAtual += delta;    
            } else{
                velocidadeAtual = velocidademaxima;
            }
        }


    //GETTER ---- metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual;
    }

}




//instanciando um objeto a partir da funcção construtora
const uno = new Carro();

uno.acelerar();
console.log(uno.getvelocidadeAtual());

const ferrari = new Carro(350,20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getvelocidadeAtual());

console.log(typeof Carro); //funcao
console.log(typeof ferrari); //objeto