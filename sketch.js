const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var myEngine,myWorld,ground;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird, sound;
var birdIMG;
function preload(){
  sound = loadSound("ls1.mp3");
  birdIMG=loadImage("birdimage.png")
}
function setup() {
  createCanvas(1200,400);
  sound.loop();
  myEngine = Engine.create();
  myWorld = myEngine.world;
  
 

  box1 = new Box(300,320,70,70);
  box2 = new Box(400,300,70,70);
  box3 = new Box(500,240,70,70);
  box4 = new Box(600,200,70,70);
  

  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(600,0,1200,20);
  ground2 = new Ground(1200,200,10,1200);
  ground3 = new Ground(0,200,10,1200);
  


  bird = new Bird(50,50);


  //PI = 180 degrees. unit of measurement of  PI is  radians
}

function draw() {
  background("grey"); 
  Engine.update(myEngine);
  fill("black")
  text(' Music by zeeky beats  ', 285, 22);
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  

  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();

  

  bird.display();
 

}