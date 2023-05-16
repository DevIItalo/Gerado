//Aleatorio
var imagens = {
    aleatorio: [
    { caminho: '../img/tv.png', nome: 'Assistir qualquer coisa' },
    { caminho: '../img/casar.png', nome: 'Pode casar comigo, mas se eu quiser kakaka' },
    { caminho: '../img/romance.png', nome: 'Ter um Romance' },
    { caminho: '../img/filhos.png', nome: 'Ter filhos' },
    { caminho: '../img/netflix.png', nome: 'Assistir Netflix' },
    { caminho: '../img/hentai.png', nome: 'Assistir hentai/pôrno'},],
   bj: [
    { caminho: '../gif/Beijo-apaixonado.gif', nome: 'Me dar um beijo apaixonado'},
    { caminho: '../gif/Beijo-cinema.gif', nome: 'Me dar um beijo conematrográfico'},
    { caminho: '../gif/Beijo-timido.gif', nome: 'Assistir filme/serie' },
    { caminho: '../img/beijo.png', nome: 'Assistir filme/serie' }],
    sx: [
        { caminho: '../img/69-em-ponte.png', nome: '69 em ponte'},
        { caminho: '../img/Bicicleta.png', nome: 'Bicicleta'},
        { caminho: '../img/caraacara.png', nome: 'Cara a cara' },
        { caminho: '../img/cowGirl.png', nome: 'Cow Girl' },
        { caminho: '../img/david-Copperfield.png', nome: 'David Copperfield' },
        { caminho: '../img/mariposa.png', nome: 'Mariposa' },
        { caminho: '../img/o-cachorro.png', nome: 'Cow Girl' },
        { caminho: '../img/o-estandarte.png', nome: 'O Estandarte'},
        { caminho: '../img/uma-subita.png', nome: 'Uma Subita'},
        { caminho: '../img/vaqueira-invertida.png', nome: 'Vaqueira Invertida'},
    ]
    };

var geraBtn = document.getElementById('geraBtn');
var continuaBtn = document.getElementById('continuaBtn');
var nomeImagem = document.getElementById('nomeImagem');
var img = document.getElementById('img');
var tipoImagemSelect = document.getElementById('opcoes');
var tipoImagemSelecionado = tipoImagemSelect.value;
var maxTentativas = 3;
var tentativas = 0;

geraBtn.addEventListener('click', geraImagem);
continuaBtn.addEventListener('click', geraImagemContinua);

function geraImagem() {
    if (tentativas >= maxTentativas) {
        alert("Você não pode mais gerar.");
        return;
    }
  tipoImagemSelecionado = tipoImagemSelect.value;

  var imagensOpcao = imagens[tipoImagemSelecionado];
  var indiceAleatorio = Math.floor(Math.random() * imagensOpcao.length);
  var caminhoImagem = imagensOpcao[indiceAleatorio].caminho;
  var nomeImg = imagensOpcao[indiceAleatorio].nome;

  geraBtn.style.display = 'none';
  continuaBtn.style.display = 'block';
  img.src = caminhoImagem;
  nomeImagem.textContent = nomeImg;
  tentativas++;
}

function geraImagemContinua() {
    if (tentativas >= maxTentativas) {
        alert("Você não pode mais gerar.");
        return;
    }
  tipoImagemSelecionado = tipoImagemSelect.value;

  var imagensOpcao = imagens[tipoImagemSelecionado];
  var indiceAleatorio = Math.floor(Math.random() * imagensOpcao.length);
  var caminhoImagem = imagensOpcao[indiceAleatorio].caminho;
  var nomeImg = imagensOpcao[indiceAleatorio].nome;

  img.src = caminhoImagem;
  nomeImagem.textContent = nomeImg;
  tentativas++;
}






