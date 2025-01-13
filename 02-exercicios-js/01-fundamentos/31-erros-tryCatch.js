
//TRATAMENTO DE ERROS EM JAVA SCRIPT

function tratarErroELancar(erro){

    throw new Error('Erro ao tentar executar ...');
}

function imprimirNomeGritado(obj){
    
    try{
        
        // console.log(obj.name.toUpperCase()+'!!!');
        //name nao existe no obj, vai dar erro

        console.log(obj.nome.toUpperCase()+'!!!');
        
    
    } catch(e){
        tratarErroELancar(e);
    
    } finally{                  //finally: sempre sera executado
        console.log('Fim da execução');
    }
    
}

const obj = {nome:'Roberto'}; 


imprimirNomeGritado(obj);