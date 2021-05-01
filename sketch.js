
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,stone,boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8; 
var treeimg,boyimg,stoneimg,mangoimg;
var slingshot;

function preload()
{
	treeimg=loadImage("images/tree.png");
	boyimg=loadImage("images/boy.png");
	stoneimg=loadImage("images/stone.png");
	mangoimg=loadImage("images/mango.png");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(600,height,1200,40);

	tree = createSprite(780,270);
	tree.addImage(treeimg);
	tree.scale=0.360;

	boy = createSprite(110,410);
	boy.addImage(boyimg);
	boy.scale=0.125;

	stone = new Stone(120,400,20);

	slingshot = new SlingShot(stone.body,{x:20, y:350});

	mango1 = createSprite(880,220);
	mango1.addImage(mangoimg);
	mango1.scale=0.100;

	mango2 = createSprite(780,200);
	mango2.addImage(mangoimg);
	mango2.scale=0.100;

	mango3 = createSprite(840,180);
	mango3.addImage(mangoimg);
	mango3.scale=0.120;

	mango4 = createSprite(700,250);
	mango4.addImage(mangoimg);
	mango4.scale=0.100;

	mango5 = createSprite(750,140);
	mango5.addImage(mangoimg);
	mango5.scale=0.100;

	mango6 = createSprite(810,100);
	mango6.addImage(mangoimg);
	mango6.scale=0.120;

	mango7 = createSprite(650,190);
	mango7.addImage(mangoimg);
	mango7.scale=0.120;

	mango8 = createSprite(925,190);
	mango8.addImage(mangoimg);
	mango8.scale=0.110;


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("white");
  
  ground.display();
  stone.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  slingshot.display();

  collision(stone,mango1);
  collision(stone,mango2);
  collision(stone,mango3);
  collision(stone,mango4);
  collision(stone,mango5);
  collision(stone,mango6);
  collision(stone,mango7);
  collision(stone,mango8);


}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function collision(s,m){
	if (s.body.position.x+m.position.x<m.diameter+s.diameter && 
		s.body.position.x-m.position.x<m.diameter+s.diameter &&
		s.body.position.y+m.position.y<m.diameter+s.diameter &&
		s.body.position.y-m.position.y<m.diameter+s.diameter
		)
	{
      Matter.body.setStatic(m.body,false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		matter.body.setPosition(stone.body,{x:20, y:350});
		slingshot.launch(stone.body);
	}
}


