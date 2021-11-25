let circuloCerto;
let pontos = 0;
const circulosColoridos = document.getElementsByClassName('ball');
const FraseAcerto = document.getElementById('answer');
const placar = document.getElementById('score');

function gerarCores() {
  console.log('gerarCores');
  const cor1 = Math.floor(Math.random() * 255);
  const cor2 = Math.floor(Math.random() * 255);
  const cor3 = Math.floor(Math.random() * 255);
  return '(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')';
}

function coresIniciais() {
  const corSelecionada = gerarCores();
  const circuloSelecionado = Math.floor(Math.random() * 6);
  circuloCerto = circuloSelecionado;
  const subtitulo = document.getElementById('rgb-color');
  subtitulo.innerText = corSelecionada;
  for (let i = 0; i < circulosColoridos.length; i += 1) {
    if (i === circuloSelecionado) {
      circulosColoridos[i].style.backgroundColor = 'rgb' + corSelecionada;
    } else {
      circulosColoridos[i].style.backgroundColor = 'rgb' + gerarCores();
    }
  }
}

function jogoEvento() {
  for (let i = 0; i < circulosColoridos.length; i += 1) {
    if (i !== circuloCerto) {
      circulosColoridos[i].addEventListener('click', errado);
    } else {
      circulosColoridos[i].addEventListener('click', certo);
    }
  }
}
window.addEventListener('load', coresIniciais);
window.addEventListener('load', jogoEvento);

function removerEvento() {
  for (let i = 0; i < circulosColoridos.length; i += 1) {
    if (i !== circuloCerto) {
      circulosColoridos[i].removeEventListener('click', errado);
    } else {
      circulosColoridos[i].removeEventListener('click', certo);
    }
  }
}

function certo() {
  removerEvento();
  FraseAcerto.innerText = 'Acertou!';
  pontos += 3;
  placar.innerText = pontos;
  coresIniciais();
  jogoEvento();
}

function errado() {
  removerEvento();
  FraseAcerto.innerText = 'Errou! Tente novamente!';
  coresIniciais();
  jogoEvento();
}

function reinicia() {
  FraseAcerto.innerText = 'Escolha uma cor';
  removerEvento();
  coresIniciais();
  jogoEvento();
}

const botaoReinicia = document.getElementById('reset-game');
botaoReinicia.addEventListener('click', reinicia);
