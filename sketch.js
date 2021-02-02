//declare variables and constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var fairy,fairyAnimation;
var bg;
var star,starImage;

function preload()
{
   //preload the images here
   fairyAnimation=loadAnimation("fairy1.png","fairy2.png");
   bg=loadImage("starnight.png");
   starImage=loadImage("star.png");
}

function setup() {
	var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    //var fairy_options ={
      //isStatic: true
 // }//

 edges = createEdgeSprites();
  /*fairy = Bodies.rectangle(200,390,20,50,fairy_options);
  World.add(world,fairy);
  //fairy.addAnimation("fairyflying",fairyAnimation);
     // fairy.scale=0.5;*/

     fairy= createSprite(150,400,10,40);
     fairy.addAnimation("fairyflying",fairyAnimation);
     fairy.scale=0.2;

     
}


function draw() {
  background(bg);

  Engine.update(engine);
    //rectMode(CENTER);
    //rect(fairy.position.x,fairy.position.y,20,20);
    keyPressed();    
    spawnStars();
    //createEgdeSprites();
    fairy.bounceOff(edges[0]);
    fairy.bounceOff(edges[2]);
    fairy.bounceOff(edges[1]);
    fairy.bounceOff(edges[3]);

  drawSprites();
}

function keyPressed(){

  if(fairy.position.x>5 && fairy.position.x<750)
  {
  if(keyCode === LEFT_ARROW){
      fairy.position.x = fairy.position.x-3; 
  }
  if(keyCode === RIGHT_ARROW){
    fairy.position.x = fairy.position.x+3; 
  }
  /*else if(fairy.x<=5)
  fairy.position.x = fairy.position.x+3; 
  else if(fairy.x>=750)
  fairy.position.x = fairy.position.x-3;*/
}

}
function spawnStars()
{
  if (frameCount%200===0)
  {
    star= createSprite(150,40,10,10);
    star.addImage(starImage);
    star.scale=0.1;
    star.velocityY=1;
    star.lifetime=600;
    star.x=Math.round(random(300,700));
  }
}