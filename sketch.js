const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27;
var polygon;
var slingShot;
var ground1,ground2;
var Base;

function setup(){
    canvas = createCanvas(900,500);                                  

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(425,370,250,15);
    ground2 = new Ground(763,265,220,15);
    polygon = new Polygon(50,200,40);
    slingShot = new SlingShot(polygon.body,{x:125,y:250});

    Base = new Ground(450,450,900,20);
    block1 = new Box(344,335,25,55);
    fill("pink"); 
    block2 = new Box(371,335,25,55);
    fill("pink"); 
    block3 = new Box(398,335,25,55);
    fill("pink"); 
    block4 = new Box(425,335,25,55);
    fill("pink"); 
    block5 = new Box(452,335,25,55); 
    fill("pink");
    block6 = new Box(479,335,25,55); 
    fill("pink");
    block7 = new Box(506,335,25,55); 
    fill("pink");
    block8 = new Box(371,277,25,55); 
    fill("pink");
    block9 = new Box(398,277,25,55); 
    fill("pink");
    block10 = new Box(425,277,25,55); 
    fill("pink");
    block11 = new Box(452,277,25,55); 
    fill("pink");                    
    block12 = new Box(479,277,25,55); 
    fill("pink");
    block13 = new Box(398,220,25,55); 
    fill("pink");
    block14 = new Box(425,220,25,55); 
    fill("pink");
    block15 = new Box(452,220,25,55); 
    fill("pink");
    block16 = new Box(425,168,25,55); 
    fill("pink");
    block17 = new Box(763,210,25,35); 
    fill("pink");
    block18 = new Box(763,200,25,35); 
    fill("pink");
    block19 = new Box(763,190,25,35); 
    fill("pink");
    block20 = new Box(700,210,25,35); 
    fill("pink");
    block21 = new Box(700,200,25,35); 
    fill("pink");
    block22 = new Box(820,210,25,35); 
    fill("pink");
    block23 = new Box(820,200,25,35); 
    fill("pink");
    block24 = new Box(820,180,25,35); 
    fill("pink");
    block25 = new Box(820,160,25,35); 
    fill("pink");
}

function draw(){
    background("black");
    Engine.update(engine);

    textSize(25);
  text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",50 ,50);
  
    block1.display(); 
    block2.display(); 
    block3.display(); 
    block4.display(); 
    block5.display(); 
    block6.display(); 
    block7.display(); 
    block8.display(); 
    block9.display(); 
    block10.display(); 
    block11.display(); 
    block12.display(); 
    block13.display(); 
    block14.display(); 
    block15.display(); 
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    //block26.display();
    Base.display();
    ground1.display();
    ground2.display();
    polygon.display();
    slingShot.display();

    detectCollision(polygon,block1);
    detectCollision(polygon,block2);
    detectCollision(polygon,block3);
    detectCollision(polygon,block4);
    detectCollision(polygon,block5);
    detectCollision(polygon,block6);
    detectCollision(polygon,block7);
    detectCollision(polygon,block8);
    detectCollision(polygon,block9);
    detectCollision(polygon,block10);
    detectCollision(polygon,block11);
    detectCollision(polygon,block12);
    detectCollision(polygon,block13);
    detectCollision(polygon,block14);
    detectCollision(polygon,block15);
    detectCollision(polygon,block16);
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lpolygon,lblock){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  blockBodyPosition=lblock.body.position;
  polygonBodyPosition=lpolygon.body.position;
  
  var distance=dist(polygonBodyPosition.x, blockBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lblock.r+lpolygon.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lblock.body,false);
    }

  }
