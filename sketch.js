const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  var canvas = createCanvas(800,450);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(400,440,800,10);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  drawSprites();
}