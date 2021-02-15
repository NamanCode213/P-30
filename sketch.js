const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var p1,C
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);

	g1=new ground(500,380,300,10)
	p1=new pol(150,350,50,50)
    C=new chain(p1.body,{x:90,y:300})
	// level 1
	b1=new block(400,350,40,40)
	b2=new block(440,350,40,40)
	b3=new block(480,350,40,40)
	b4=new block(520,350,40,40)
	b5=new block(560,350,40,40)
	b6=new block(600,350,40,40)
	// level 2
	b2a=new block(440,320,40,40)
	b3a=new block(480,320,40,40)
	b4a=new block(520,320,40,40)
	b5a=new block(560,320,40,40)
	// level 3
	b3b=new block(480,300,40,40)
	b4b=new block(520,300,40,40)
	// level 4
	b1c= new block(500,260,40,40)
}


function draw() {
  rectMode(CENTER)
  background(255,255,255);
  g1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b2a.display();
  b3a.display();
  b4a.display();
  b5a.display();
  b3b.display();
  b4b.display();
  b1c.display();
  p1.display();
  C.display();
  drawSprites();
 keyPressed();
}

function mouseDragged(){
    Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY}) 
    }
    function mouseReleased(){
        C.Fly()
    }
    function keyPressed(){
        if (keyCode===32){
    C.attach(p1.body)
    
        }
    
    }