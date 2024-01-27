/* */


//cadeia de prototipo (prototype chain)

const avo = {
    atributo1: 'A'
}

const pai ={
    __proto__: avo, //aqui eu referencio quem é o prototipo (obj pai)
    atributo2: 'B'
}

const filho = {
    __proto__: pai,
    atributo3: 'C'
}


console.log(filho.atributo1); // acessou atributo1, passando por Pai, e depois Avo
console.log(filho.atributo2);
console.log(filho.atributo3);


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        } else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`;
    }
}


const ferrari = {
    modelo: 'F40',
    velMax: 324 //vai sobrepor a velMax do Pai

}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`;
    }
}


//funcao que estabelece a relacao de prototipo
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);


console.log(ferrari);
console.log(volvo);

ferrari.acelerarMais(200);
volvo.acelerarMais(100);

console.log(ferrari.status());
console.log(volvo.status());


{

    /*
    const pessoa = {
        nome: 'Danilo',
        idade: 29
    }

    const pessoaFisica ={
        __proto__: pessoa, //aqui eu referencio quem é o prototipo (obj pai)
        cpf: '123.456.789-00'
    }

    const aluno = {
        __proto__: pessoaFisica,
        matricula: 1234
    }

    const pessoaJuridica = {
        __proto__: pessoa,
        cnpj: '333.111.222.888-00'
    }

    const empresa = {
        __proto__: pessoaJuridica,
        inscricaoEstadual: '111.222.31.11'
    }

    console.log(empresa.cnpj, empresa.nome, empresa.inscricaoEstadual);

    console.log(aluno.nome, aluno.cpf, aluno.matricula);
    */
}