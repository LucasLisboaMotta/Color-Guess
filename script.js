let circuloCerto
const circulosColoridos = document.getElementsByClassName('ball');
const FraseAcerto = document.getElementById('answer');

function gerarCores() {
    const cor1 = Math.floor(Math.random() * 255);
    const cor2 = Math.floor(Math.random() * 255);
    const cor3 = Math.floor(Math.random() * 255);
    return '(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')';
}

function coresIniciais() {
    const corSelecionada = gerarCores();
    const circuloSelecionado = Math.floor(Math.random() * 6);
    circuloCerto = circuloSelecionado
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

function jogoEvento() {
  for (let i = 0; i < circulosColoridos.length; i += 1) {
    if (i !== circuloCerto) {
      circulosColoridos[i].addEventListener('click', errado);
    } else {
      circulosColoridos[i].addEventListener('click', certo)
    }
  }
}

jogoEvento();

function certo() {
    FraseAcerto.innerText = 'Acertou!';
    coresIniciais();
    jogoEvento();
}

function errado() {
    FraseAcerto.innerText = 'Errou! Tente novamente!';
    coresIniciais();
    jogoEvento();
}

function reinicia() {
    FraseAcerto.innerText = 'Escolha uma cor';
    coresIniciais();
}

const botaoReinicia = document.getElementById('reset-game');
botaoReinicia.addEventListener('click', reinicia);
