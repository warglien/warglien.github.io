var ease=.8;
//var y=200;
var xx=600;
var yy=200;
var rx=2;
var ry=2;
var button;


function preload() {
  mySound = loadSound('ball.wav');
}

function setup(){
// createP("oops no sorry press the ball button instead!");
 width=600;
 createCanvas(width,400);
 mySound.setVolume(0.1);
 px1=width-30;
 px2=width-20;
 createP();
 button=createButton("ball please");
 button.style('font-size','24px');
 button.position(250);

}

function draw(){
  background(0,200,0);
  xx=xx+rx/ease;
  yy=yy+ry/ease;
  adjust();
  stroke(265);
  strokeWeight(2);
  line(0,200,width,200);
  stroke(0);
  strokeWeight(5);
  line(width/2,0,width/2,400);
  strokeWeight(2);
  fill(250,0,0);
  rectMode(CENTER);
  rect(px1,mouseY,10,50);
  fill(250);
  ellipse(xx,yy,10,10);
  button.mousePressed(newball);
}

function adjust(){
  if (xx<0){rx=-rx;};
  //if (xx>400){rx=-rx;};
  if (yy<0){ry=-ry;};
  if (yy>400){ry=-ry;};
  if(xx>px1 && xx<px2 && yy>mouseY-25 && yy<mouseY+25) {rx=-rx;mySound.play();};
}

function newball(){
  xx=0; yy=200;
  rx=int(random(3,6));
  ry=int(random(3,6));
  print('NEW GAME');
}
