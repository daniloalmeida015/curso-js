
// objeto cores
const cores = {

    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao;
    }
}

// pegando todos os elementos com a classe 'tag'
document.querySelectorAll('.tag').forEach(elemento => {
    

    // pegando o nome da da tag de cada elemento (tagName tras o nome do elemento) e deixando minuscula
    // se é um DIV, um P etc
    const nomeDaTag = elemento.tagName.toLowerCase();
    
    // no elemento pego, aplica o borderColor
    // com base na tag, pegando da função get dentro do objeto cores
    elemento.style.borderColor = cores.get(nomeDaTag);


    // verifica se o na lista de classes do elemento pego não contém a classe 'nolabel' nele
    if(!elemento.classList.contains('nolabel')){

        // então cria a tag 'label' (createElement)
            const label = document.createElement('label');
            //dentro da tag 'label' criada, coloque o background color
            label.style.backgroundColor = cores.get(nomeDaTag);;

            // dentro da tag 'label', coloca o nome da tag (pego anteriormente)
            label.innerHTML = nomeDaTag;
        
        // Dentro do elemento pego, coloque essa tag criada (label)
        // insira antes (insertBefore) do primeiro filho dentro de elemento 
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})