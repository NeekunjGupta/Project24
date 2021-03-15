
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var sand,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var stone;
var rubber;
var hammer;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,690,800,40);
    sand = new Sand(200,660,10);
    sand2 = new Sand(205,660,10);
    sand3 = new Sand(210,660,10);
    sand4 = new Sand(215,660,10);
    sand5 = new Sand(220,660,10);
    sand6 = new Sand(570,660,10);
    sand7 = new Sand(575,660,10);
    sand8 = new Sand(580,660,10);
    sand9 = new Sand(585,660,10);
    sand10 = new Sand(590,660,10);
    stone = new Stone(500,290,50,50);
    rubber = new Rubber(390,290,50);
    hammer = new Hammer(340,290,80,80,PI/10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  stone.display();
  rubber.display();
  hammer.display();
  drawSprites();
 
}



