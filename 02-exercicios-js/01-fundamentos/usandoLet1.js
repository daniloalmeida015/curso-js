let numero =1;

{
    // let entende o escopo {}, como escopo de bloco
    // fica como variavel local
    // let tem um escopo a mais do que var
    let numero = 2;
    console.log('Dentro: '+numero);
}

console.log('Fora: '+numero);


/* 

    VAR:
        tem escopo global e de funcao
    
    LET:
        tem escopo global, funcao e bloco;



*/