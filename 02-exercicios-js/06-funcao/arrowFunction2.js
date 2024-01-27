// usando a função Arrow o this não varia
//vantagem da funcção arrow

function Pessoa(){
    this.idade = 0;

    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    }, 1000)
}


new Pessoa();