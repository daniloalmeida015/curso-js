
// atribuir um novo objeto para module.exports e esse objeto estará disponivel
// para fora do modulo

module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa Noite';
    }
}

 //     ... importação no moduloCliente.js