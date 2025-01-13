
//usando a notação literal

    const objeto1 = {};
    console.log(objeto1);

// forma construtora
    const objeto2 = new Object;
    console.log(objeto2);

//funcao construtora
    function Produto(nome, preco, desconto){
        this.nome = nome;   //visivel a partir da instancia
        
        this.getPrecoComDesconto = ()=>{
            return preco * (1-desconto);
        }

    }


    const prod1 = new Produto('Caneta', 7.99, 0.15);
    const prod2 = new Produto('Notebook', 2999.99, 0.25);

    console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto());


//FUNÇÃO FACTORY
    
    function criarFuncionario(nome, salarioBase, faltas){

        return {
            nome,
            salarioBase,
            faltas,
            getSalario(){
                return (salarioBase/30)*(30-faltas);
            }
        }
    }

    const func1 = criarFuncionario('Joao', 2890, 4);
    const func2 = criarFuncionario('Joao', 8920, 10);
    console.log(func1.getSalario, func2.getSalario);

//Object.create

    const filha = Object.create(null);
    filha.nome = 'Ana';
    console.log(filha);


// Uma função famosa que retorna Objeto ...
    const deJSON = JSON.parse('{"info": "Sou um JSON"}');
    console.log(deJSON);
    console.log(deJSON.info);


//tipo de  Objeto em JS? 
console.log(typeof Object, typeof new Object);


//