//códigos dos carros//

let yCarros = [40, 96, 153, 213, 265, 317];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [2.9, 3.6, 3, 3.1, 3.4, 2.7];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
  xCarros[i] -= velocidadeCarros[i];
    }
}

function resetParaInicio(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
  if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }
    }
}

function passouTodaTela(xCarros){
    return xCarros < -45;
}