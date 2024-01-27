function Pessoa(){
    this.idade = 0;

    //self (pode ser qualquer nome) salva a referencia de 'this'
    // uma estrategia para salvar essa referencia
    
    const self = this;

    /* usando o Bind
    
    setInterval(function(){
        this.idade++;
        console.log(this.idade);

    }.bind(this),1000);
    
    */

    //usando o self

    setInterval(function(){
     self.idade++;
    console.log (self.idade);

    },1000)
}


new Pessoa();