
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
	OriginPaper = new Paper(300, 550, 60);

}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  OriginPaper.display();

}

function keyPressed() {
    if (keyDown("SPACE")) {
        Matter.Body.applyForce(OriginPaper.body, OriginPaper.body.position, {x:790, y:-920});
    }
}