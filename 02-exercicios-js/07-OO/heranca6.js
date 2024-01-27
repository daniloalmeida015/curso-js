
    //FUNCAO CONSTRUTORA
        function Aula(nome, videoID){
            this.nome = nome;
            this.videoID = videoID;
        }
    
        // instanciado com o new
        const aula1 = new Aula('Bem vindo', 123);
        const aula2 = new Aula('Até breve', 456);

        console.log(aula1);
        console.log(aula2);

/** SIMULANDO O FUNCIONAMENTO DO NEW */ 

        function novo(funcao, ...params){
            const obj = {};
            obj.__proto__ = funcao.prototype;

            funcao.apply(obj, params);
            return obj;
        }

        // instanciado com o NOVO, que é uma representação
        // de como o new Funciona
            const aula3 = novo(Aula, 'Bem vindo', 123);
            const aula4 = novo(Aula, 'Até breve', 456);

            console.log(aula3);
            console.log(aula4);