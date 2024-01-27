const carro = {
    velAtual: 0,
    velMax: 200,
    acalerar(delta){
        if(this.velAtual+delta <= this.velMax){
            this.velAtual += delta;
        } else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual} KM/h de ${this.velMax}KM/h`;
    }
}



const ferrari ={
    modelo: 'f40',
    velMax: 324 //shadowing , sobreposição de velMax em carro
}


const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`;
    }
}


//setando a relação de herança
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);


console.log(ferrari);
console.log(volvo);

volvo.acalerar(100);
console.log(volvo.status());