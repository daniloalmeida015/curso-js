//HERANÇA EM CIMA DE CLASSES

class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

//EXTENDS
class Pai extends Avo{
    constructor(sobrenome, profissao='Professor'){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva');
    }
}

const filho = new Filho();
console.log(filho);
