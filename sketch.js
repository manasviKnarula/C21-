var wall, thickness, destruction;

var bullet,speed,weight;

var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);

  bullet.velocityX = speed;

  bullet.shapeColor=color(225);


  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}




function draw() {
  background(0);

  if(hasCollided(bullet,wall))
  {
    bullet.velocity=0
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  }

  if(damage>10){
    wall.shapeColor=color(255,0,0);
    text("This wall isn't effective", 800, 200);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
    text("This wall is effective", 800,200);
    textSize(100);
    textStyle("bold");
    }

    drawSprites();
  }

 function hasCollided(lbullet, lwall){
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if (bulletRightEdge<=wallLeftEdge)
   {
     return true
   }
   return false;



  }
 
