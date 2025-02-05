// Objeto Process: 
//           - ler dados do teclado do usuário
//           - Imprimir na tela
//           - pegar parametros a partir da chamada no terminal



const anonimo = process.argv.indexOf('-a') !== -1;

// NO TERMINAL (dentro da pasta node), passei 'node .\entradaESaida.js -a'
//console.log(anonimo);

if(anonimo){
    process.stdout.write('Fala anonimo!\n'); // imprime no terminal 
    process.exit();     //mata o processo
} else{
    process.stdout.write('Informe seu nome: ');
    process.stdin.on('data', data => {
        
        const nome = data.toString().replace('\n', ' ');

        process.stdout.write(` Fala ${nome}`);
        process.exit();
    })
}