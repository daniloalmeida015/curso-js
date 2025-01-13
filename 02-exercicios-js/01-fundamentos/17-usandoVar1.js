

function teste(){
    var local = 123;
    let b = "teste"

    console.log("Exibindo dentro do escopo da funcao: "+local);

    //var local nao sera exibido fora do escopo da funcao
}

//aqui sera exibido
teste();    //chamada da funcao

//nao sera exibido fora do escopo da funcao

    // console.log("funcao: "+local); //ERRO: local IS NOT DEFINED


