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


document.querySelectorAll('.tag').forEach(elemento => {
    
    const nomeDaTag = elemento.tagName.toLowerCase();
    // se é um DIV, um P etc
    // elemento.style.borderColor = '#616161';
    elemento.style.borderColor = cores.get(nomeDaTag);

    
    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label');
        label.style.backgroundColor = cores.get(nomeDaTag);;
        label.innerHTML = nomeDaTag;
        elemento.insertBefore(label, elemento.childNodes[0])
    }

})