require('./global');

console.log(global.MinhaApp.saudacao());


MinhaApp.nome = 'Eita'; //eu conseguiria mudar o valor da variável, por ser global (isso é ruim)
// pra resolver isso, vou colocar Object.freeze( ) passando o MinhaApp dentro, lá no globaal.js, para evitar alterações
console.log(global.MinhaApp.nome);


