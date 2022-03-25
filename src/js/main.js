/*======== Deixando CONTAINERS com TAMANHO DA TELA =======*/
let cabecalho = document.querySelector('.cabecalho')
cabecalho.style.height = window.innerHeight + 'px'

let atuacoes = document.querySelector('.atuacoes')
atuacoes.style.height = window.innerHeight + 'px'

/*================== Adionando os cards no HTML ====================*/
const listDublagens = document.getElementById('list-dublagens')
let lista
let i = 0
let cont = 15

function carregarImagens(isReloading) {
  if (cont < 60) {//Na pasta img tem somente 60 cards, ou seja, não é possivel ter mais de 60 cards na listDublagens
    isReloading ? cont += 15 : cont = 15//Essa função é usada no iniciar da pagina e depois no click de um botão, por isso usamos o 'cont' como limitador do FOR

    for (i; i < cont; i++) {
      lista = '<div class="card-dublagem" id="' + dublagens[i].id + '">'
        + '<img src="' + dublagens[i].image + '" alt="' + dublagens[i].personagem + '">'
        + '<div class="info-card-dublagem">'
        + '<h4>' + dublagens[i].personagem + '</h4>'
        + '<p>' + dublagens[i].movie + '</p>'
        + '</div>'
        + '</div>'
      listDublagens.innerHTML += lista
    }
  }
}
carregarImagens(false)

/*================== Adionando mais cards ao clicar no button ====================*/
const button = document.getElementById('button-dublagens')
button.addEventListener('click', e => carregarImagens(true))

/*================== Mudando o video da seção ATUAÇÕES ====================*/
const buttonNext = document.getElementById('button-next-atuacoes')
const buttonPrev = document.getElementById('button-prev-atuacoes')
let contVideo = 1 //Numeração do video que irá aparecer

function criarVideoNovo(video) {//Função criar Video Novo
  const novoVideo = document.createElement('video')
  const source = document.createElement('source')

  source.setAttribute('src', video + '.mp4')
  source.setAttribute('type', 'video/mp4')
  novoVideo.setAttribute('id', 'video-atuacoes')
  novoVideo.setAttribute('class', 'video-atuacoes')
  novoVideo.setAttribute('controls', 'true')
  novoVideo.setAttribute('poster', video + '.png')
  novoVideo.appendChild(source)

  return novoVideo
}

buttonNext.addEventListener('click', function () {
  if (contVideo < 4) {//Como são 4 videos so podemos fazer até o video 04
    contVideo++
    //Deletando video atual
    document.getElementById('video-atuacoes').remove()

    //Adicionando video novo
    const divAtuacoes = document.getElementById('videos-ator')
    const novoVideo = criarVideoNovo('./src/video/0' + contVideo)
    divAtuacoes.appendChild(novoVideo)
  }
})

buttonPrev.addEventListener('click', function () {
  if (contVideo > 1) {//Como a numeração começa em 01 so podemos voltar até o video 01
    contVideo--

    //Deletando video atual
    document.getElementById('video-atuacoes').remove()

    //Adicionando video novo
    const divAtuacoes = document.getElementById('videos-ator')
    const novoVideo = criarVideoNovo('./src/video/0' + contVideo)
    divAtuacoes.appendChild(novoVideo)
  }
  console.log(contVideo)
})


