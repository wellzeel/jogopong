let posicaox = 200
let posicaoy = 200
let tamanho = 30
let xraquete = 4
let yraquete = 200
let xraqueteoponente = 630
let yraqueteoponente= 200
let larguraraquete = 20
let alturaraquete = 150
let raio = tamanho/2
let velocidadex = 20
let velocidadey = 20
let velocidadeyraquete;
let largura = 700
let altura = 400
let colidiu = false
let meuspontos = 0
let oponentepontos = 0


function setup() {
  createCanvas(largura, altura);
}

function draw(){
  background(0);
  criabolinha(); 
  velocidadebolinha();
  tocaborda(); 
  criarraquete();
  moveraquete();
  colisaoraquete();
  criarraqueteoponente();
  movimentoraqueteoponente();
  colisaoraqueteoponente();
  criarplacar();
  contarpontos();
  
}

function criabolinha(){ circle(posicaox,posicaoy,tamanho)}
function velocidadebolinha(){posicaox  += velocidadex
  posicaoy += velocidadey}
  function tocaborda(){if(posicaox + raio  > largura || posicaox - raio < 0)
  velocidadex *= -1
  if(posicaoy + raio > altura || posicaoy - raio < 0)
  velocidadey *= -1}
  function criarraquete(){rect(xraquete,yraquete,larguraraquete,alturaraquete)}
function moveraquete(){if (keyIsDown(UP_ARROW))
 yraquete -= 10  
  if (keyIsDown(DOWN_ARROW))
 yraquete += 10  }
 function colisaoraquete(){if (posicaox - raio < xraquete + larguraraquete
     && posicaoy - raio < yraquete + alturaraquete
     && posicaoy+ raio > yraquete)
     velocidadex *= -1
  
}
function criarraqueteoponente(){
rect(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete)
}
function movimentoraqueteoponente(){
velocidadeyraquete = posicaoy - yraqueteoponente - larguraraquete/2 - 30
yraqueteoponente += velocidadeyraquete
}
function colisaoraqueteoponente(){
  colidiu = collideRectCircle(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete, posicaox, posicaoy, tamanho)
  if (colidiu)
    velocidadex *= -1
}
function criarplacar(){
  stroke(255)
  fill(color(20, 48, 15))
  rect(80, 20, 40, 30)
  rect(331, 20, 40, 30)
  textAlign(CENTER)
  textSize(40)
  fill(255)
  text (meuspontos, 100, 50)
  text (oponentepontos, 350, 50)
}
function contarpontos(){
  if(posicaox < 15)
  oponentepontos += 1  
  if (posicaox > 680)
  meuspontos += 1
    
}


