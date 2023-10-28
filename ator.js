//Códigos do ator//
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
 image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
    voltaPosicaoInicial();
    somDaColisao.play(0, 1, 0.5);
    if(pontosMaiorQueZero());
  }
}
}

function voltaPosicaoInicial(){
    yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  fill(255,215,0);
  textAlign(CENTER);
  text(meusPontos, width / 5, 28);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDosPontos.play(0, 1, 0.5);
    voltaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  if (meusPontos > 0){
    meusPontos -= 1;
  }
}

function podeSeMover(){
  return yAtor < 366;
}