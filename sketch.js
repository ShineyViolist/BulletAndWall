var car,wall;

var speed,weight,deform;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(225,225,255);  

  car.velocityX = speed;

  if(car.isTouching(wall)){
    car.velocityX = 0;

    deform = (0.5*weight*speed*speed)/22500;

    if(deform < 100){
      car.shapeColor = ("green");
    }
    if(deform >= 100||deform < 180){
      car.shapeColor = ("yellow");
    }
    if(deform >= 180){
      car.shapeColor = ("red");
    }
  }

  drawSprites();
}