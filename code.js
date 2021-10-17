var paddle,ball;
var edges=[];
var box1,box2,box3,box4;
function setup(){
//creating plddle and the ball
paddle = createSprite(200, 375, 50, 15);
 ball = createSprite(150, 250, 20, 20);

//first row of boxes
 box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
 box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
 box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
 box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//second row of boxes
 box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
 box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
 box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
 box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
 box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
 box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
}
 var score=0;
 var gamestate="serve";

function draw() {
  background("white");
  textSize(20);
  text("score"+score,320,30);
  //Moving the ball on pressing enter key
  
  if (gamestate=="serve"){
    fill("black");
    textSize(30);
    text("press enter to start", 100, 215);
    if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    gamestate="play";
  }
  }
  edges=createEdgeSprites();
  if (gamestate=="play"){
  //Moving the paddle with mouse along the x-axis
  paddle.x=World.mouseX;
  
  //destroy the boxes when ball touches them
  if (ball.isTouching(edges[3])|| score==16){
    gamestate="end";
  }
  
  
  }
  //Making the ball bounceOff the paddle and three sides of canvas
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(paddle);
  
  if (gamestate=="end"){
    fill("red");
    textSize(25);
    text("Game over",170,200);
    
  }
  
  if (ball.isTouching(box1)){
    box1.destroy();
    score=score+1;
  }
  if (ball.isTouching(box2)){
    box2.destroy();
    score=score+1;
  }
  if (ball.isTouching(box3)){
    box3.destroy();
    score=score+1;
  }
  if (ball.isTouching(box4)){
    box4.destroy();
    score=score+1;
  }
  if (ball.isTouching(box5)){
    box5.destroy();
    score=score+1;
  }
  if (ball.isTouching(box6)){
    box6.destroy();
    score=score+1;
  }
  if (ball.isTouching(box7)){
    box7.destroy();
    score=score+1;
  }
  if (ball.isTouching(box8)){
    box8.destroy();
    score=score+1;
  }
  if (ball.isTouching(box9)){
    box9.destroy();
    score=score+1;
  }
  if (ball.isTouching(box10)){
    box10.destroy();
    score=score+1;
  }
  if (ball.isTouching(box11)){
    box11.destroy();
    score=score+1;
  }
  if (ball.isTouching(box12)){
    box12.destroy();
    score=score+1;
  }if (ball.isTouching(box13)){
    box13.destroy();
    score=score+1;
  }
 if (ball.isTouching(box14)){
    box14.destroy();
    score=score+1;
  } 
  if (ball.isTouching(box15)){
    box15.destroy();
    score=score+1;
  }
  if (ball.isTouching(box16)){
    box16.destroy();
    score=score+1;
  }
  drawSprites();
  }

