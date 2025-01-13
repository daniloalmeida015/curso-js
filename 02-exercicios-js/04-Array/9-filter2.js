Array.prototype.meuFiltro = function(callback){
    const novoArray = [];

    for(let i=0; i< this.length; i++){
        
        if(callback(this[i], i, this)){
            novoArray.push(this[i]);
        }
        
        
    }
    return novoArray;
}



    const produtos = [
        {nome: 'Notebook', preco: 2499, fragil: true},
        {nome: 'iPad Pro', preco: 4100, fragil: true},
        {nome: 'Copo de vidro', preco: 12.49, fragil: true},
        {nome: 'Copo de plastico', preco: 18.99, fragil: false}
    ];
    
    
    
    const isCaro = function(p){return p.preco > 1000 && p.fragil;};
    const isFragil = function(p){return p.fragil;};
    
    console.log(produtos.meuFiltro(isCaro));