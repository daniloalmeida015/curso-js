//só para simular um 'pseudoArray' a partir de um objeto 

const quaseArray = {0:'Rafael', 1:'Ana', 2:'Bia'};

console.log(quaseArray);
console.log(typeof quaseArray); //Object


//simular a impressão no console
Object.defineProperty(quaseArray, 'toString',{    
    value: function(){return Object.values(this);},
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia'];

console.log(quaseArray.toString(), meuArray);