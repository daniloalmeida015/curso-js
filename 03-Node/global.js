// console.log(global);


global.MinhaApp = Object.freeze( {
    saudacao(){
        return 'Estou em todos os lugares!';
    },
    nome:'Sistema Legal'
})

//QUALQUER arquivo do sistema terá acesso a 'MinhaApp'