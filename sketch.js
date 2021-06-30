var paperObject, dustbinSide1, dustbinSide2, dustbinSide3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var option ={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	paperObject = createSprite(80,640,30,30);
	paperObject.shapeColor = "purple";
	dustbinSide1 = createSprite(450,610,20,100);
	dustbinSide1.shapeColor = "white";

	dustbinSide2 = createSprite(550,650,200,20);
	dustbinSide2.shapeColor = "white";

	dustbinSide3 = createSprite(650,610,20,100);
	dustbinSide3.shapeColor = "white";

	groundSprite=createSprite(width/2, 670, width,10);
	groundSprite.shapeColor = "yellow";
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85});
	}
}



