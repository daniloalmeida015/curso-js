// função para criar novo elemento
    function novoElemento(tagName, className){

        //criando o elemento
        const elem = document.createElement(tagName);
        //aplicando a classe ao elemento
        elem.className = className;
        //retornando o elemento
        return elem;
    }


// função construtora para criar as barreiras
    function Barreira(reversa = false){

        //usando o 'this' para o elemento ser visivel fora
        //novoElemento() é a função acima que cria o elemento
        this.elemento = novoElemento('div', 'barreira');

        //cria a borda
            const borda = novoElemento('div', 'borda');    
        //cria o corpo
            const corpo = novoElemento('div', 'corpo');
        //verificar se primeiro vai adicionar a borda ou o corpo
        // com base no parametro passado
            this.elemento.appendChild(reversa ? corpo : borda);
            this.elemento.appendChild(reversa ? borda : corpo);

        //função para definir a altura da barreira
        this.setAltura = altura => corpo.style.height = `${altura}px`;
    }


//TESTANDO
        // const b = new Barreira(true);
        // b.setAltura(200);
        // document.querySelector('[wm-flappy').appendChild(b.elemento);


// criando UMA FUNÇÃO CONSTRUTORA par de barreiras
function parDeBarreiras(altura, abertura, x){

    
    this.elemento = novoElemento('div', 'par-de-barreiras');

    //barreira superior: barreira reversa
    this.superior = new Barreira(true);
    //barreira inferior: barreia normal
    this.inferior = new Barreira(false);

    // dando um append (inserindo) dentro da 'div par-de-barreiras' os elementos 'superior' e 'inferior'
    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);  


    //função para sortear onde a abertura vai aparecer
    this.sortearAbertura = () => {

        //'abertura' é fixa, recebida por parâmetro
        //Math.random(): vai de 0 a 1
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaInferior = altura - abertura - alturaSuperior;

        this.superior.setAltura(alturaSuperior);    //barreira superior
        this.inferior.setAltura(alturaInferior);    //barreira inferior
    }


    //pegando a posição X do elemento (par de barreiras)
    this.getX = ()=> parseInt(this.elemento.style.left.split('px')[0]);

    //alterando a posição de 'x'
    this.setX = x => this.elemento.style.left = `${x}px`;

    //pegando a largura do elemento
    this.getLargura = () => this.elemento.clientWidth;


    this.sortearAbertura();
    this.setX(x);


}

//testando
// const b = new parDeBarreiras(700, 200, 400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);




//função construtora Barreiras
//espaco: espaço entre as barreiras,
// notificarPonto: disparado quan a barreira cruzar o centro do jogo
function Barreiras(altura, largura, abertura, espaco, notificarPonto){
    
    //pares de barreiras
    this.pares = [

        //terceiro parametro é o x
        //largura é a largura da tela do jogo

        //primeiro par de barreiras vai ficar na posição fora da area do jogo
        new parDeBarreiras(altura, abertura, largura),  
        //segundo par de barreiras vai ficar na posição fora da area do jogo + espaço entre elas
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    //de quantos em quantos pxs vai ser deslocado as barreiras
    const deslocamento = 3;

    //função que dá o deslocamento da barreira
    this.animar = ()=>{

        //para cada par de barreira
        this.pares.forEach(par => {

            //seta o X pegando a posição atual menos o deslocamento
            par.setX(par.getX() - deslocamento);

            
            //SE o elemento sair da área do jogo
            if(par.getX() < (par.getLargura()*-1)){

                //mudar de posição... jogar para o fim das barreiras
                par.setX(par.getX() + espaco * this.pares.length);
                //sorteio a nova abertura ()
                par.sortearAbertura();
            }

            //verificar quando uma barreira cruzar o meio

            const meio = largura/2;

            //se a posição 'X' do par de barreira somado  ao deslocamento for maior que o meio E
            // o 'X' sem o deslocamento for menor que o meio
            const cruzouOMeio = par.getX()+deslocamento >= meio && par.getX() < meio;

            //se cruzou o meio
            if(cruzouOMeio){
                notificarPonto();
            }



        })
    }

}



function Passaro(alturaJogo){

    let voando = false;

    this.elemento = novoElemento('img','passaro');
    this.elemento.src = 'imgs/passaro.png';

    //saber a posição do passaro
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    //setando o Y do passaro
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    //quando pressionar qualquer tecla
    window.onkeydown = e => voando = true;
    //quando soltar a tecla
    window.onkeyup = e => voando = false;


    //
    this.animar = () => {

        //se estiver voando acrescenta 8, se não diminiu 5
        const novoY = this.getY() + (voando ? 8 : -5);
        //altura maxima que o pássaro pode chegar
        const alturaMaxima = alturaJogo - this.elemento.clientHeight;

        //testando o valor do novo Y para não passar o max ou minimo
        if(novoY <= 0){
            this.setY(0);
        }else if(novoY >= alturaMaxima){
            this.setY(alturaMaxima);
        } else{
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo/2);

}





// const barreiras = new Barreiras(700, 1200, 200, 400);
// const passaro = new Passaro(700);

// const areaDoJogo = document.querySelector('[wm-flappy]');

// //adicionando o passaro a area do jogo
// areaDoJogo.appendChild(passaro.elemento);

// //adicionando as barreiras a area do jogo
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

// setInterval(() => {
//     barreiras.animar();
//     passaro.animar();
// }, 20);


function Progresso(){
    this.elemento = novoElemento('span', 'progresso');
    this.atualizar
}