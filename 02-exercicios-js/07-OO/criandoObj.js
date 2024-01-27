
/// notação literal
    const obj1 = {}
    console.log(obj1);

    /// Object em js
    console.log(typeof Object, typeof new Object);
    const obj2 = new Object();
    console.log(obj2);


//// funcoes construtoras
    function Produto(nome, preco, desc){
        this.nome = nome;
        this.getPrecoComDesconto = () => {
            return preco * (1-desc);
        }
    }

    const prod1 = new Produto('Caneta', 7.99, 0.15);
    const prod2 = new Produto('Notebook', 2499.89, 0.1);

    console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto());


// a partir de função Factory
    

    function criarFuncionario(nome, salarioBase, faltas){
        return {
            nome,
            salarioBase,
            getSalario(){
                return (salarioBase/30) * (30 - faltas);
            }


        }   
    }


    const funcionario1 = criarFuncionario('joao', 2900, 1);
    const funcionario2 = criarFuncionario('Maria', 3200, 8);

    console.log(funcionario1.getSalario(), funcionario2.getSalario());

// a partir do Object.create

    const filha = Object.create(null);
    filha.nome = 'Ana';
    console.log(filha.nome);

// JSON.parse

    const fromJSon = JSON.parse('{"info":"Sou um JSON"}');
    console.log(fromJSon.info);

    
