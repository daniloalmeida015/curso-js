/* CRIANDO O PRÓPRIO FILTER */ 
 
    Array.prototype.meuFiltro = function(callback){
        const novoArray =[];
        for(let i=0; i< this.length; i++){
            if(callback(this[i], i, this)){
                novoArray.push(this[i]);
            }
        }
        return novoArray;
    }

 const listaProdutos = [
    {
    nome: 'Notebook',
    preco: 2499,
    fragil: true
    },
    {
        nome: 'iPad pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de plástico',
        preco: 18.99,
        fragil: false
        }
 ];


const isFragil = produto => produto.fragil;
const isCaro = produto => produto.preco>=500;

console.log(
            listaProdutos
            .meuFiltro(isCaro)
            .meuFiltro(isFragil)
            );