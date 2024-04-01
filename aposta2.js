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

        currentPayout +=0.01;
        
        qtdGanhos +=1;

        


        log.success("Prox. aposta:" + currentBet+" - Payout: "+currentPayout);
        log.success("QtdPerda:"+qtdPerdas+" QtdGanho: "+qtdGanhos);
        log.success("Aux: "+aux);

      } else {
        // Derrota
        
        qtdPerdas +=1;
        
        currentPayout = config.basePayout.value;

      

        if(qtdPerdas>=2){
          currentBet = apostaInicial*1.5;
          qtdPerdas-=1;
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