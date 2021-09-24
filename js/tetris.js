var canvas;
var ctx;
var FPS = 50;

//medidas canvas
var anchoCanvas = 350;
var altoCanvas = 560;

//medidas de tablero
var anchoTablero = 10;
var altoTablero = 20;
//medidas en pixeles de cada cuadro
var anchoF = 35;
var altoF = 35;

var margenSuperior = 4;

var cantidad = 0;
var lineasSimples = 0;
var lineasDobles = 0;
var lineasTriples = 0;
var lineasTetris = 0;
var puntaje = 0;
var lineasTotales = 0;
var nivel = 1;
var lineasNivel = 0;


//12x17 - 10x16 de pantalla
var tablero = [
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],//4 primeras filas no se ven
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

var tableroCopia = [
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],//4 primeras filas no se ven
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

var rojo = '#ff0000';
var morado = '#800080';
var naranja = '#ff8c00';
var amarillo = '#ffd700';
var verde = '#008000';
var cyan = '#00ced1';
var azul = '#0000cd';

var fichaGrafico= [
[
  [
  [0,0,0,0],
  [0,1,1,0],
  [0,1,1,0],
  [0,0,0,0]
  ],

  [
  [0,0,0,0],
  [0,1,1,0],
  [0,1,1,0],
  [0,0,0,0]
  ],

  [
  [0,0,0,0],
  [0,1,1,0],
  [0,1,1,0],
  [0,0,0,0]
  ],

  [
  [0,0,0,0],
  [0,1,1,0],
  [0,1,1,0],
  [0,0,0,0]
  ]
],

[
  [
  [0,0,0,0],
  [2,2,2,2],
  [0,0,0,0],
  [0,0,0,0]
  ],

  [
  [0,0,2,0],
  [0,0,2,0],
  [0,0,2,0],
  [0,0,2,0]
  ],

  [
  [0,0,0,0],
  [2,2,2,2],
  [0,0,0,0],
  [0,0,0,0]
  ],

  [
  [0,0,2,0],
  [0,0,2,0],
  [0,0,2,0],
  [0,0,2,0]
  ]

],

[
  [
  [0,0,0,0],
  [0,0,3,3],
  [0,3,3,0],
  [0,0,0,0]
  ],

  [
  [0,0,3,0],
  [0,0,3,3],
  [0,0,0,3],
  [0,0,0,0]
  ],

  [
  [0,0,0,0],
  [0,0,3,3],
  [0,3,3,0],
  [0,0,0,0]
  ],

  [
  [0,0,3,0],
  [0,0,3,3],
  [0,0,0,3],
  [0,0,0,0]
  ]

],

[
  [
  [0,0,0,0],
  [0,4,4,0],
  [0,0,4,4],
  [0,0,0,0]
  ],

  [
  [0,0,0,4],
  [0,0,4,4],
  [0,0,4,0],
  [0,0,0,0]
  ],

  [
  [0,0,0,0],
  [0,4,4,0],
  [0,0,4,4],
  [0,0,0,0]
  ],

  [
  [0,0,0,4],
  [0,0,4,4],
  [0,0,4,0],
  [0,0,0,0]
  ]

],

[
  [
  [0,0,0,0],
  [0,5,5,5],
  [0,5,0,0],
  [0,0,0,0]
  ],

  [
  [0,0,5,0],
  [0,0,5,0],
  [0,0,5,5],
  [0,0,0,0]
  ],

  [
  [0,0,0,5],
  [0,5,5,5],
  [0,0,0,0],
  [0,0,0,0]
  ],

  [
  [0,5,5,0],
  [0,0,5,0],
  [0,0,5,0],
  [0,0,0,0]
  ]

],

[
  [
  [0,0,0,0],
  [0,6,6,6],
  [0,0,0,6],
  [0,0,0,0]
  ],

  [
  [0,0,6,6],
  [0,0,6,0],
  [0,0,6,0],
  [0,0,0,0]
  ],

  [
  [0,6,0,0],
  [0,6,6,6],
  [0,0,0,0],
  [0,0,0,0]
  ],

  [
  [0,0,6,0],
  [0,0,6,0],
  [0,6,6,0],
  [0,0,0,0]
  ]
],


[
  [
  [0,0,0,0],
  [0,7,7,7],
  [0,0,7,0],
  [0,0,0,0]
  ],

  [
  [0,0,7,0],
  [0,0,7,7],
  [0,0,7,0],
  [0,0,0,0]
  ],

  [
  [0,0,7,0],
  [0,7,7,7],
  [0,0,0,0],
  [0,0,0,0]
  ],

  [
  [0,0,7,0],
  [0,7,7,0],
  [0,0,7,0],
  [0,0,0,0]
  ]
]
];

//RESETEA TABLERO
function reiniciaTablero(){
  
  cantidad = 0;
  lineasSimples = 0;
  lineasDobles = 0;
  lineasTriples = 0;
  lineasTetris = 0;
  puntaje = 0;
  lineasTotales = 0;
  nivel = 1;
  lineasNivel = 0;
  pieza.retraso = 50;

  for(py=0;py<21;py++){

    for(px=0;px<12;px++){

      tablero[py][px] = tableroCopia[py][px];
    }
  }

};

var pieza;

var objPieza = function(){
  this.x = 0;
  this.y = 0;
  this.angulo = 0;
  this.tipo = 2;
  this.retraso = 50;
  this.fotograma = 0;

  //  COMPRUEBA SI PIERDE
  this.compruebaSiPierde = function(){

    var pierde = false;

    for(px=1; px < anchoTablero + 1; px++){

      if(tablero[3][px] > 0){
        pierde = true;
      }
    }

    return pierde;
  };

  //LIMPIA FILA COMPLETA
  this.limpia = function(){
    var completa;
    var cantComp = 0;
    for(py = margenSuperior;py < altoTablero;py++){
      completa = true;
      
      for(px=1;px<anchoTablero + 1;px++){
        if(tablero[py][px]===0){
          completa = false;
        }
      }
    
      if(completa){
        //borra fila y reindexa
        tablero.splice(py, 1);
        //agrega fila al principio
        tablero.unshift([1,0,0,0,0,0,0,0,0,0,0,1]);

        cantComp++;
        
      
      }
    }
    if(cantComp === 1) {
      lineasSimples++;
      puntaje += 10;
    }else if(cantComp === 2) {
      lineasDobles++;
      puntaje += 25;
    }else if(cantComp === 3) {
      lineasTriples++;
      puntaje += 50;
    }else if(cantComp === 4) {
      lineasTetris++;
      puntaje += 100;
    } 
    lineasTotales += cantComp;
    lineasNivel += cantComp;
    verificaNivel();
  };

  //NUEVA PIEZA
  this.nueva = function(){
    this.tipo = Math.floor(Math.random()*7);
    this.y = 0;
    this.x = 4;
    cantidad++;
  }
  //ROTAR
  this.rotar = function(){

    var anguloNuevo = this.angulo;

    if(anguloNuevo < 3){
      anguloNuevo++;
    }else{
      anguloNuevo = 0;
    }

    if(this.colision(anguloNuevo, this.y, this.x)===false){
      this.angulo = anguloNuevo;
    } 
  };
  //CAER
  this.caer = function(){
    if(this.fotograma < this.retraso){
      this.fotograma++;
    }
    else{

      if(this.colision(this.angulo, this.y+1, this.x)===false){
        this.y++;
      }
      else{
        this.fijar();
        this.limpia();
        this.nueva();

        if(this.compruebaSiPierde()===true){
          alert('perdiste');
          //console.log('llamar a resetear');
          reiniciaTablero();
        }
      }
      this.fotograma = 0;
    }
  };
  //CAMBIA RETRASO
  this.cambiaRetraso = function(retraso){
    console.log(this.retraso);
    this.retraso -= retraso;
    console.log(this.retraso);
  }
  //FIJAR FICHA
  this.fijar = function(){
    for (py=0; py < 4; py++) {
      for (px = 0; px < 4; px++) {
        if(fichaGrafico[this.tipo][this.angulo][py][px]>0){
          tablero[this.y+py][this.x+px] = fichaGrafico[this.tipo][this.angulo][py][px];
        }
      }
    }
  };
  //COLISION
  this.colision = function( anguloNuevo, yNueva, xNueva ){
    var resultado = false;

    for(py=0;py<4;py++){

      for(px=0;px<4;px++){

        if(fichaGrafico[this.tipo][anguloNuevo][py][px] > 0){
          if(tablero[yNueva+py][xNueva+px]>0){
            resultado = true;
          }
        }
      }
    }
    return resultado;
  };
  //DIBUJA
  this.dibuja = function(){
    //<4 porq las piezas son de 4x4
    for(py=0;py<4;py++){
      for(px=0;px<4;px++){

        //va a dibujar la forma y no los 0 de los vectores
        if(fichaGrafico[this.tipo][this.angulo][py][px]!=0){
          //color
          if(fichaGrafico[this.tipo][this.angulo][py][px]===1)
            ctx.fillStyle = rojo;
          if(fichaGrafico[this.tipo][this.angulo][py][px]===2)
            ctx.fillStyle = naranja;
          if(fichaGrafico[this.tipo][this.angulo][py][px]===3)
            ctx.fillStyle = amarillo;
          if(fichaGrafico[this.tipo][this.angulo][py][px]===4)
            ctx.fillStyle = verde;
          if(fichaGrafico[this.tipo][this.angulo][py][px]===5)
            ctx.fillStyle = cyan;
          if(fichaGrafico[this.tipo][this.angulo][py][px]===6)
            ctx.fillStyle = azul;
          if(fichaGrafico[this.tipo][this.angulo][py][px]===7)
            ctx.fillStyle = morado;
          
          
          //crear el cuadro- coordenadas - tamano
          ctx.fillRect((this.x + px -1)*anchoF, (this.y + py - margenSuperior)*altoF, anchoF, altoF);
        } 
      }
    }
  };
  //ABAJO
  this.abajo = function(){
    if(this.colision(this.angulo, this.y+1, this.x) === false){
      this.y++;
    }
    
  };
  //DERECHA
  this.derecha = function(){
    if(this.colision(this.angulo, this.y, this.x+1) === false){
      this.x++;
    }
  };
  //IZQUIERDA
  this.izquierda = function(){
    if(this.colision(this.angulo, this.y, this.x-1) === false){
      this.x--;
    }
  };

  this.nueva();

};

function verificaNivel(){
  
  console.log("lineasNivel antes de restar 5: " + lineasNivel);
  if (lineasNivel >= 5){
    nivel++;
    pieza.cambiaRetraso(2);
    lineasNivel -= 5;
    console.log("lineasNivel desp de restar 5: " + lineasNivel);
  }
}

function dibujaTablero(){

  for(py=margenSuperior;py<altoTablero;py++){
      for(px=1;px<anchoTablero+1;px++){

        //va a dibujar la forma y no los 0 de los vectores
        if(tablero[py][px]!=0){
          //color
          if(tablero[py][px]===1)
            ctx.fillStyle = rojo;
          if(tablero[py][px]===2)
            ctx.fillStyle = naranja;
          if(tablero[py][px]===3)
            ctx.fillStyle = amarillo;
          if(tablero[py][px]===4)
            ctx.fillStyle = verde;
          if(tablero[py][px]===5)
            ctx.fillStyle = cyan;
          if(tablero[py][px]===6)
            ctx.fillStyle = azul;
          if(tablero[py][px]===7)
            ctx.fillStyle = morado;
          
          //crear el cuadro- coordenadas - tamano
          ctx.fillRect((px-1)*anchoF, (py-margenSuperior) *altoF, anchoF, altoF);
          
        } 
      }
    }
};

function inicializaTeclado(){
  document.addEventListener('keydown', function(tecla){
  canvas.addEventListener('mousedown', clickRaton, false);
    
    function clickRaton(e){
      pieza.rotar();
    }

    if(tecla.keyCode === 38 || tecla.keyCode === 87){//arriba
      pieza.rotar();
    }
    if(tecla.keyCode === 40 || tecla.keyCode === 83){//abajo
      pieza.abajo();
    }
    if(tecla.keyCode === 37 || tecla.keyCode === 65){//izq
      pieza.izquierda();
    }
    if(tecla.keyCode === 39 || tecla.keyCode === 68){//der
      pieza.derecha();
    }
  });
};


function inicializa(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  document.getElementById('canvas').style.width = anchoCanvas;
  document.getElementById('canvas').style.height = altoCanvas;

  //definir medidas canvas
  canvas.style.width = anchoCanvas;
  canvas.style.height = altoCanvas;

 
  pieza = new objPieza();

  inicializaTeclado();

  //llama a intervalo de funcion principal
  setInterval(function(){
    principal();
  }, 1000/FPS)

};

function borraCanvas(){
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;
};


function principal(){
  borraCanvas();
  dibujaTablero();
  pieza.caer();
  pieza.dibuja();

  //info datos
  document.getElementById('piezas').innerHTML = cantidad;
  document.getElementById('lineas1').innerHTML = lineasSimples;
  document.getElementById('lineas2').innerHTML = lineasDobles;
  document.getElementById('lineas3').innerHTML = lineasTriples;
  document.getElementById('lineas4').innerHTML = lineasTetris;
  document.getElementById('puntaje').innerHTML = puntaje;
  document.getElementById('nivel').innerHTML = nivel;
  document.getElementById('lineasTotales').innerHTML = lineasTotales;
  
};
