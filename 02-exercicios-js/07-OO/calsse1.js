class lancamento{
    constructor(nome="Genérico", valor=0){
        this.nome = nome;
        this.valor=valor;
    }
}


class CicloFinanceiro{
    constructor(mes, ano){
        this.mes=mes;
        this.ano=ano;
        this.lancamentos = [];
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l=>this.lancamentos.push(l));
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(lanc=>{
            valorConsolidado += lanc.valor;
        });

        return valorConsolidado;
    }
}

const salario = new lancamento('salario', 5600);
const contaLuz = new lancamento('Luz', -300);
const internet = new lancamento('internet', -120);


const contas = new CicloFinanceiro(12, 2023);
contas.addLancamento(salario, contaLuz, internet);


console.log(contas.sumario());