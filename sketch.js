function setup() {
  createCanvas(800,400);
 fixedrect  =  createSprite(200,200,20,20)
 fixedrect.shapeColor = "green" ;
 movingrect = createSprite(300,300,20,20)
 movingrect.shapeColor = "green" ;

 box = createSprite(250,350,20,20)
 box.shapeColor = "red" ;''

 sweet = createSprite(490,100,20,20)
 sweet.shapeColor = "lime" ;
}
function draw() {
  background(255,255,255);  
  drawSprites();
  box.x = World.mouseX
  box.y = World.mouseY
  if (Istouching(box,sweet)) {
  box.shapeColor = "cyan"
  sweet.shapeColor = "cyan"
  }
  else{
    box.shapeColor = "green" ;
    sweet.shapeColor = "green" ;
  }
}
function Istouching(object1,object2) {
  if(object1.x - object2.x <object1.width/2 + object2.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y- object1.y < object2.height/2 + object1.height/2  && object2.x - object1.x < object2.width/2 + object1.width/2) {
  return true ;
 

  }
  else {
    return false ;
  }  
}