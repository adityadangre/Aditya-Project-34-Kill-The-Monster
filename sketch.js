const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var ground;
var hero;
var fly;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;
var monster,bm1,bm2,bm3;

function preload() {
//Preload The Images Here
bg=loadImage("images/bg.png");
}

function setup() {
  createCanvas(1530, 800);
  engine = Engine.create();
  world = engine.world;

  //Create Sprites Here
  ground = new Ground(650,600,1300,15);
  hero = new Hero(400,380,120);
  fly = new Fly(hero.body,{x:400,y:100});

  b1 = new Block(600,580);
  b2 = new Block(600,540);
  b3 = new Block(600,500);
  b4 = new Block(600,460);
  b5 = new Block(600,420);
  b6 = new Block(600,380);
  b7 = new Block(600,340);

  b8 = new Block(670,580);
  b9 = new Block(670,540);
  b10 = new Block(670,500);
  b11 = new Block(670,460);
  b12 = new Block(670,420);

  b13 = new Block(740,580);
  b14 = new Block(740,540);
  b15 = new Block(740,500);
  b16 = new Block(740,460);
  b17 = new Block(740,420);
  b18 = new Block(740,380);

  b19 = new Block(810,580);
  b20 = new Block(810,540);
  b21 = new Block(810,500);
  b22 = new Block(810,460);
  b23 = new Block(810,420);
  b24 = new Block(810,380);
  b25 = new Block(810,340);
  b26 = new Block(810,300);

  monster = new Monster(1250,500,1300);
  bm1 = new Monster(1080,550,300);
  bm2 = new Monster(1000,550,300);
  bm3 = new Monster(920,550,300);

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();

  monster.display();
  bm1.display();
  bm2.display();
  bm3.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}