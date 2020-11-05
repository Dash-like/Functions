var fixedRect, movingRect;
function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  object1 = createSprite(100, 100, 50, 50);
  object2 = createSprite(500, 500, 50, 50);
  object3 = createSprite(300, 300, 50, 50);
  object4 = createSprite(400, 400, 50, 50);

  
  movingRect.velocityX = -5;
  movingRect.velocityY = 0.3;
  
}

function draw() {
  background(255,255,255);
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  
  if(isTouching(movingRect, object1)){
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
 }

 if(isTouching(movingRect, object2)){
  object2.shapeColor = "green";
  movingRect.shapeColor = "green";
}

if(isTouching(movingRect, object3)){
  object3.shapeColor = "green";
  movingRect.shapeColor = "green";
}

if(isTouching(movingRect, object4)){
  object4.shapeColor = "green";
  movingRect.shapeColor = "green";
}

 if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
 }

  bounceOff(movingRect, fixedRect);

  drawSprites();
}

