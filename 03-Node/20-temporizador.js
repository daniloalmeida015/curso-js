/**
 *O node-schedule é uma biblioteca para agendar tarefas no Node.js usando datas 
 específicas ou padrões de recorrência semelhantes ao cron.
 Ele é útil para tarefas como backups automáticos, envios de e-mails programados, 
 limpeza de logs, entre outros.
 */



const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds());
}); //de 5 em 5 segundos



//  scheduleJob(String regra) ... dentro do parametro segue a regra ' * * * * * * '
//
//      ' * * * * * * '
//      ' segundo minuto hora dia mes semana '
// 
//  acima está definido como '*/5 * * * * *' ----> VAI RODAR A CADA 5 SEGUNDOS


// temporizador padrão do Java Script
    setTimeout(function(){
        tarefa1.cancel();       //forma de cancelar um temporizador
        console.log('Cancelando tarefa 1!');
    }, 20000);
    //após 20 segundos

    // RecurrenceRule -> regra de recorrencia -> 

        const regra = new schedule.RecurrenceRule();
        regra.dayOfWeek = [new schedule.Range(1,5)]; // de seg a sex
        // 0 dom, 1 segunda, 2 ter, 3 qua, 4 qui, 5 sex, 6 sab
        regra.hour = 22;
        regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})