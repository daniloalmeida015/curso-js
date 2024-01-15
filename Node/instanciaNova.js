// uma factory retorna uma nova instancia/objeto

module.exports = ()=>{
    return {
        valor:1,
        incrementar(){
            this.valor++
        }
    }
}