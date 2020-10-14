
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var side1, side2, side3;
 var paper1;
 var ground1;
 var dustbinImage;
function preload()
{
 	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1= new ground(500,550,1000,20);
 side1 = new dustbin(875,540,150,20);
 side2 = new dustbin(810,415,20,250);
 side3 = new dustbin(940,415,20,250);
 dustbinImage = new dustI(875,615,200,250);

 paper1 = new paper(100,350,70);

 
	Engine.run(engine);
	
	console.log(side1);
  console.log();
}

function draw() {

  background(220);
  side1.display();
  side2.display();
  side3.display();
  paper1.display();
  ground1.display();
  dustbinImage.display();
  console.log();
  //drawSprites();
 
}

function keyPressed(UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:170,y:-440}); 
	}

