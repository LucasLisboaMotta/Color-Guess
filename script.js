function gerarCores() {
    const cor1 = Math.floor(Math.random() * 255);
    const cor2 = Math.floor(Math.random() * 255);
    const cor3 = Math.floor(Math.random() * 255);
    return '(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')';
}


function coresIniciais() {
    const circulosColoridos = document.getElementsByClassName('ball');
    const corSelecionada = gerarCores();
    const circuloSelecionado = Math.floor(Math.random() * 6);
    const subtitulo = document.getElementById('rgb-color');
    subtitulo.innerText = corSelecionada;
    for (let i = 0; i < circulosColoridos.length; i += 1){
        if (i === circuloSelecionado) {
            circulosColoridos[i].style.backgroundColor = 'rgb' + corSelecionada;
        } else {
            circulosColoridos[i].style.backgroundColor = 'rgb' + gerarCores();
        }
    }
}

coresIniciais();
