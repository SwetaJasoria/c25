
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
// var box1, box2, box3;
var paperBall, paperImg;
var ground;
var dustbin, dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
}



function setup() {
	createCanvas(800, windowHeight);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height - 20,800,20);

	// box1 = new Dustbin(700,height - 35,150,20);
	// box2 = new Dustbin(620,height - 75,20,100);
	// box3 = new Dustbin(780,height - 75,20,100);

	paperBall = new Paper(120,100, 50);
	console.log(paperBall);

	// dustbin = new Dustbin(600, height-130, 200, 200);
	
	dustbin = createSprite(600, height-160, 100, 100);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.8;

}


function draw() {
	//background(0);
	background("white");

  Engine.update(engine);

  paperBall.display();
  ground.display();
//   dustbin.display();

  drawSprites();

//   box1.display();
//   box2.display();
//   box3.display();
  
  
  
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:25,y:-40});
	}
}



