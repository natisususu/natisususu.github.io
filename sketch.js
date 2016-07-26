//12 07 2016 taller p5
//elipse que sigue al mouse en un fondo verde

//hola hola hola

//variables
//declaración de variables
var anchoElipse;
//asignacion de variables
anchoElipse = 100;

//manera abreviada de declarar y asignar en una línea
var alturaElipse = 100;

//scope o rango o alcance
//variables globales y locales

//las variables globales son declaradas fuera de los cuerpos de las funciones
//las variables locales son declaradas dentro del cuerpo de alguna funcion
//sólo pueder variar valor dentro de esa funcion

//declaración de la función setup
function setup() {
  //createCanvas (dimHor, dim Ver);
  //createCanvas(600, 400);
  createCanvas(windowWidth, windowHeight);

  //background(R,G,B);
  background(0, 255, 0);

  //relleno de la elipse
  //fill(R, G, B)
  fill(112, 0, 112);

  //stroke(R, G ,B);
  //noStroke() hace que no tenga borde
  noStroke();

  //strokeWeight(px);
  //define el borde en pixeles
  strokeWeight();

  //frameRate
  frameRate(100);



}

//declaración de la función draw
function draw() {

  //ejecutar funcion fondoRojo
  //fondoRojo();

  //ellipse(posX, posY, width, height);
  //ellipse(mouseX, mouseY, anchoElipse, alturaElipse);

  //escribe en la consola de javascript
  console.log("hola que tal");

  muchasElipses(mouseX, mouseY, anchoElipse, alturaElipse);
  
  //saveCanvas("myCanvas" + "jpg");

}

//declaración de función nueva
function nombreFuncion(argumento1, argumento2, etc) {

}
//declaracion funcion fondoRojo
function fondoRojo() {
  //declaracion y asignacion de variable local llamada rojo
  var rojo = 255;
  background(rojo, 0, 0);
  //imprimir variable local rojo en consola
  console.log("el valor de rojo" + rojo + "saludos");

  //saveCanvas("myCanvas" + "jpg");

}

function muchasElipses() {

  var muchas = 1000;

  //for(variable de loop: condicion de seguir: refrescar) {}
  for (var i = 0; i < muchas; i++) {
    //color del relleno
    fill(random(255), random(255), random(255), random(255));
    //sin borde
    noStroke()

    var ancho = 100;
    var alto = 100;
    //la funcion random(x) arroja un valor aleatorio entre 0 y x
    ellipse(random(width), random(height), random(ancho), random(alto));

  }

}