

const produto = new Object();
produto.nome = 'Cadeira';
produto.preco = 220;
produto['marca do produto'] = 'generica';   //nao usar este tipo

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];

console.log(produto);


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
    calcularValorSeguro: function(){
        // ...
    }
}


carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua CDE';


console.log(carro);

delete carro.condutores; //deleta tudo abaixo de condutores

console.log(carro);

delete carro.proprietario.endereco;
console.log(carro);