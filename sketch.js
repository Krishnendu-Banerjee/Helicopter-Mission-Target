var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var standLeftSprite, standRightSprite, standBottomSprite;
var packageReleased;
var dropSound;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	dropSound=loadSound("sounds/PackageRel.mp3")
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	

	



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 //left stand
	 
	 standLeftSprite=createSprite(310, 610, 20, 100)
	standLeftSprite.shapeColor= "red";

	 standLeftBody = Bodies.rectangle(310, 610, 20, 100 , {isStatic:true} );
	 World.add(world, standLeftBody);
	 
	 // right stand
	 standRightSprite=createSprite(480, 610, 20, 100)
	standRightSprite.shapeColor= "red";

	 standRightBody = Bodies.rectangle(480, 610, 20, 100, {isStatic:true} );
	 World.add(world, standRightBody);
	 
	 //bottom stand
	 standBottomSprite=createSprite(395, 650, 150, 20)
	standBottomSprite.shapeColor= "red";

	 standBottomBody = Bodies.rectangle(395, 635, 150, 20, {isStatic:true} );
 	World.add(world, standBottomBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
	Matter.Body.setStatic(stand1, true);
	Matter.Body.setStatic(stand2, true);
	Matter.Body.setStatic(stand3, true);
	dropSound.play();
  }
}


