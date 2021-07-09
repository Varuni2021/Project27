const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	//Create the Bodies Here.

	bobObject1 = new Bob(470,400,10,10);
	bobObject2 = new Bob(440,400,10,10);
	bobObject3 = new Bob(410,400,10,10);
	bobObject4 = new Bob(380,400,10,10);
	bobObject5 = new Bob(350,400,10,10);

	roofObject = new Roof(410, 200, 200,20);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3 = new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	


	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}