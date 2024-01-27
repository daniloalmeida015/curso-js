

function teste(){
    var local = 123;
    console.log("Exibindo dentro do escopo da funcao: "+local);

    //var local nao sera exibido fora do escopo da funcao
}

//aqui sera exibido
teste();    //chamada da funcao

//nao sera exibido fora do escopo da funcao
    //  console.log("funcao: "+local);