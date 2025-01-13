// classe em JS é uma função


class Lancamento{

    constructor(nome = 'Generico', valor=0){
        this.nome = nome;
        this.valor = valor;
    }

}


class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;

        this.lancamentos = [];
    }

    adicionarLancamentos(...lancamentos){
        lancamentos.forEach(lancamento=> this.lancamentos.push(lancamento));
    }

    sumario(){
        let valorConsolidado =0;
        this.lancamentos.forEach(lancamento => {
            valorConsolidado+= lancamento.valor;
        });

        return valorConsolidado;

    }

}


const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);

contas.adicionarLancamentos(salario, contaDeLuz);

console.log(contas.sumario());