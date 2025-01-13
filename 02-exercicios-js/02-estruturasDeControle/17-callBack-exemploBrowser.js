// Exemplo de callback o browser... usar o codigo abaixo no browser

document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu');
}

//pode usar o arrow
document.getElementsByTagName('body')[0]
.onclick = (e) => console.log('O evento ocorreu.');