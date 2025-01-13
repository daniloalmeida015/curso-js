/* 
    Orientação a Objetos (OO) é um paradigma de programação baseado no conceito de objetos,
 que são estruturas que combinam dados (atributos) e comportamentos (métodos). 
 Esse paradigma é amplamente utilizado para modelar sistemas de software de maneira mais 
 intuitiva e modular, tornando o desenvolvimento e a manutenção mais eficientes. */


// CLASSES: Uma classe é como um molde ou modelo para criar objetos.
// Define os atributos (dados) e métodos (funções) que os objetos dessa classe terão.

class Carro {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    exibirInformacoes() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }

// OBJETO
// É uma instância de uma classe, ou seja, um exemplar que segue o modelo definido pela classe.

  // Criando um objeto (instância da classe)
  const meuCarro = new Carro("Toyota", "Corolla");
  meuCarro.exibirInformacoes(); // Marca: Toyota, Modelo: Corolla
  

/* PRINCÍPIOS DA ORIENTAÇÃO A OBJETOS:
- Encapsulamento
- Herança
- Polimorfismo
- Abstração */



/* ### Encapsulamento

    O encapsulamento protege os dados dos objetos, permitindo acesso controlado por métodos.
Normalmente, isso é feito usando modificadores de acesso:

    Público: Pode ser acessado de qualquer lugar.
    Privado: Pode ser acessado apenas dentro da própria classe.
*/

class ContaBancaria {
    #saldo; // Atributo privado
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    depositar(valor) {
      this.#saldo += valor;
    }
  
    exibirSaldo() {
      console.log(`Saldo: ${this.#saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria(1000);
  minhaConta.depositar(500);
  minhaConta.exibirSaldo(); // Saldo: 1500


/*
Herança
Permite que uma classe (classe filha) reutilize atributos e métodos de outra classe (classe pai).
Ajuda a evitar redundância e promove reutilização de código.
*/

class Animal {
    emitirSom() {
      console.log("Som genérico");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Latido");
    }
  }
  
  const cachorro = new Cachorro();
  cachorro.emitirSom(); // Latido
  



/*
Polimorfismo
Significa "muitas formas". Permite que métodos com o mesmo nome tenham comportamentos diferentes em classes diferentes.
Exemplo:
*/


class Animal {
    emitirSom() {
      console.log("Som genérico");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Latido");
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log("Miau");
    }
  }
  
  // Polimorfismo em ação
  const animais = [new Cachorro(), new Gato()];
  animais.forEach(animal => animal.emitirSom());
  // Saída:
  // Latido
  // Miau
  


/*Abstração
Foca nos detalhes essenciais de um objeto, escondendo detalhes complexos que não são relevantes.
Muitas vezes implementada por meio de classes abstratas, que servem como base para outras classes.
*/

class Forma {
    calcularArea() {
      throw new Error("O método calcularArea() deve ser implementado.");
    }
  }
  
  class Circulo extends Forma {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }
  }
  
  const circulo = new Circulo(5);
  console.log(circulo.calcularArea()); // 78.53981633974483
  