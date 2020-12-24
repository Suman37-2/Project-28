
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyimg;

function preload()
{
boyimg=loadImage("boy.png");
treeimg=loadImage("tree.png");	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	gb=createSprite(400,550,20,20);
	gb.addImage(boyimg);
	gb.scale=0.2;

	gr1=new Ground(1000,680);
	stone1=new Stone(270,450);
	tree1=new Tree(1400,400);
	mango1=new Mango(1300,300);
	mango2=new Mango(1400,350);
	mango3=new Mango(1500,370);
	mango4=new Mango(1500,200);
	mango5=new Mango(1600,300);
	chain=new Glue(stone1.body,{x:270,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightgreen");
  
  gr1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain.display();

  if(keyDown("space")){
	Matter.Body.setPosition(stone1.body,{x:270,y:450});
	chain.attach(stone1.body);  
  }
  

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});	
}
function mouseReleased(){
  chain.fly();	
}



