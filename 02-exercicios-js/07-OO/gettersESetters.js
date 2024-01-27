/*  POR CONVENÇÃO: se usa underline ( _valor por exemplo )
para dizer que é uma variavel privada.*/ 


const sequencia = {
    _valor : 1,     //convencao
    get valor(){
        return this._valor++;
    },
    set valor(valor){
        
        if(valor > this._valor){
            this._valor = valor;
        }
        
    }
}

console.log(sequencia.valor, sequencia.valor);

sequencia.valor = 100;
console.log(sequencia.valor, sequencia.valor);
