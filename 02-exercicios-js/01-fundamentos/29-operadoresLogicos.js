function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;  //ou
    const comprarTv50 = trabalho1 && trabalho2; //e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2);   //bitiwise Xor
    const comprarTv32 = trabalho1 != trabalho2;
    //simulado o xor (ou exclusivo), vai ser xor qnd for diferentes 
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel};
    // mesma coisa
    //   return {comprarSorvete: comprarSorvete,
    //           comprarTv50: comprarTv50,
    //           comprarTv32: comprarTv32,
    //           manterSaudavel: manterSaudavel
    //   };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));