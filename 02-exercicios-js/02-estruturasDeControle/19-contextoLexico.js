//
const valor = 'Global';

function minhaFuncao(){
    //como a funcao nao possui a variavel 'valor',
    //vai procurar no escopo maior
    console.log(valor);
}

minhaFuncao();  //

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec(); //vai imprimir 'Local' ou 'Global'???

/* vai mostrar 'global', pois o valor vai depender do contexto lexico,
contexto de onde foi declarada e não no contexo onde ela está sendo chamada */