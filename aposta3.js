var config = {
  baseBet: { label: "base bet", value: currency.minAmount, type: "number" },
  basePayout: { label: "base payout", value: 2, type: "number" },
  stop: { label: "stop if next bet >", value: 1e8, type: "number" },
};

// Novas variáveis conforme as regras
var divisor = 0.05;
var totalDerrota = 0;

function main() {
  var currentBet = config.baseBet.value;
  var apostaInicial = currentBet;
  var currentPayout = config.basePayout.value;
  var qtdPerdas = 0;
  var qtdGanhos = 0;
  var totalPerdido = 0;
  var aux = 2;

  
  game.onBet = function () {
    

    game.bet(currentBet, currentPayout).then(function (payout) {




      //ESTE QUE ESTAVA RODANDO

      if (payout > 1) {

        currentPayout = config.basePayout.value;
        
        qtdGanhos +=1;

        if(totalPerdido >0){
            totalPerdido = totalPerdido - ((currentPayout*currentBet)-currentBet);
        }
       
        if(qtdGanhos >= aux){
              qtdPerdas=0;
              currentPayout = config.basePayout.value;
              currentBet = apostaInicial;
              totalPerdido = 0;
              qtdGanhos=0;
             
        }

      


        log.success("Prox. aposta:" + currentBet+" - Payout: "+currentPayout);
        log.success("QtdPerda:"+qtdPerdas+" QtdGanho: "+qtdGanhos);
        log.success("Aux: "+aux);

      } else {
        // Derrota
        
        qtdPerdas +=1;
        currentPayout = config.basePayout.value;
 
        if(qtdPerdas ==3){

                totalPerdido += (currentBet*2.5);
                currentBet = totalPerdido;
                aux = 1;
                qtdGanhos=0;

        }

        if(qtdPerdas ==5){

          totalPerdido += (currentBet*2.5);
          currentBet = totalPerdido;
          aux = 1;
          qtdGanhos=0;

   }

        if(qtdPerdas ==7){

          totalPerdido += (currentBet*2.2);
          currentBet = totalPerdido;
          aux = 1;
          qtdGanhos=0;

      }

      if(qtdPerdas ==9){

        totalPerdido += (currentBet*1.5);
        currentBet = totalPerdido;
        aux = 1;
        qtdGanhos=0;

    }


    if(qtdPerdas ==11){
      currentPayout = 1.5;
      totalPerdido += (currentBet*1.5);
      currentBet = totalPerdido;
      aux = 1;
      qtdGanhos=0;

  }

      if(qtdPerdas >11){

              qtdPerdas=0;
              currentPayout = config.basePayout.value;
              currentBet = apostaInicial;
              totalPerdido = 0;
              qtdGanhos=0;
              qtdGanhos=0;

    }


        
        
       
        log.error("Prox. aposta:" + currentBet+" - Payout: "+currentPayout);
        log.error("QtdPerda:"+qtdPerdas+" QtdGanho: "+qtdGanhos);
        log.error("Aux: "+aux);

      }

      

      // Verifica se o valor da aposta ultrapassou o limite especificado em 'stop'. Se sim, o jogo é interrompido.
      if (currentBet > config.stop.value) {
        log.error("Was about to bet " + currentBet + " which triggers the stop");
        game.stop();
      }
    });
  };
}