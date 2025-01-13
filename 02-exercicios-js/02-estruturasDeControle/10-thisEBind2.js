//usando 'bind' ou crindo constante 'self' para driblar o this que varia


function Pessoa() {
    
    this.idade = 0;

    const self = this;
    // dispara uma outra funcao a partir de determinado intervalo
    // que vc passar
    setInterval(function(){
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/
    ,1000); //1000 é o intervalo, ms
    

}

new Pessoa;
