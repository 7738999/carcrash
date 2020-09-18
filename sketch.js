var speed, weight, car, wall;




function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 200, 50, 50);
car.velocityX=speed;

wall=createSprite(1500, 200, 60, height/2);


 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deform=0.5*weight*speed*speed/22509;
  if(deform>180)
  {car.shapecolor=color(250,0,0);}

  if(deform<180 && deform>100)
  {car.shapecolor=color(230,230,0);} 

  if(deform<100)
  {car.shapecolor=color(0,255,0);}
}





  drawSprites();
}