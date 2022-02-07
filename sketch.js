var player, playerImg;
var ball, ballImg;
var edges;
var brick,bricksGroup,brickImg;

function preload(){
ballImg=loadImage("ball.png")
playerImg=loadImage("player.png")
brickImg=loadImage("brick.png")
}

function setup(){
createCanvas(windowWidth, windowHeight)

player=createSprite(windowWidth/2,windowHeight-100,100,20)
ball=createSprite(windowWidth/2,windowHeight-200)
ball.addImage(ballImg)
ball.scale=0.5
player.addImage(playerImg)
edges=createEdgeSprites();
player.shapeColor=("black")
ball.shapeColor=("red")
player.setCollider("rectangle",0,0,60,140)
player.debug=false;
bricksGroup=new Group()
for(var i=20;i<windowWidth;i=i+60)
{
  brick=createSprite(i,65,50,30)
  brick.shapeColor="red"
  bricksGroup.add(brick)
  brick.addImage(brickImg)
  brick.scale=0.3
  brick.setCollider("rectangle",0,0,40,50)
  brick.debug=true
}
}
function draw(){
background("grey")
player.x=mouseX;
//console.log (player.x)

if(player.x<=50){
player.x=50
}
if(player.x>=1300){
  player.x=1300
  }

ball.bounceOff(edges[0])
ball.bounceOff(edges[1])
ball.bounceOff(edges[2])
ball.bounceOff(player);
ball.bounceOff(bricksGroup);

drawSprites()
}

function mouseClicked(){
ball.velocityX=7
ball.velocityY=5
}
