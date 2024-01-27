//CADEIA DE PROTOTIPOS (PRTOTYPE CHAIN)

Object.prototype.atributo1 = 'atrib1'; // nao faça isso
const avo = {atributo2: 'atrib2'};
const pai = {__proto__: avo, atributo3: 'atrib3', atributo4: 'atrib4 do pai'};
const filho = {__proto__: pai, atributo4: 'atrib4'};

console.log(
    filho.atributo1,   //busca do pai e depois do avo
    filho.atributo2,    // e por fim de Object.prototype
    filho.atributo3,
    filho.atributo4
    );



