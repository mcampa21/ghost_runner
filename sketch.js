var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var end = 0
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
 }

 function setup() {
   createCanvas(600, 600);
   tower = createSprite(300,300);
   tower.addImage("tower",towerImg);
   tower.velocityY = 1;
   ghost = createSprite(300,300,50,50);
   ghost.addImage(ghostImg);
   ghost.scale = 0.35;
   doorsGroup = new Group();
   climbersGroup = new Group();
   invisibleBlockGroup = new Group();
   }

   function draw() {
   background(200);
   if(gameState==="play"){
   if(keyDown("a")){
    ghost.x=ghost.x-4;
   }
   if(keyDown("d")){
   ghost.x=ghost.x+4;
   }
   if(keyDown("space")){
   ghost.velocityY = -7;
   }
   ghost.velocityY = ghost.velocityY + 0.7;
   if(tower.y > 400){
      tower.y = 300
    }
    obs();
   }
    if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
   }
   if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
   ghost.destroy();
   gameState = "end";
   background(0);
   fill("yellow");
   text("GAMEOVER",300,300);
   }
  
   drawSprites();
  


}
 function obs(){
  if (frameCount%150===0){
  var door = createSprite(200,-50);
  door.addImage(doorImg);
  var climber = createSprite(200,10);
  climber.addImage(climberImg);
  climber.x = door.x;
  door.velocityY = 5;
  door.x = Math.round(random(100,400))
 climber.velocityY = 5;
 door.lifetime = 150;
 climber.lifetime = 150;
 var invisibleBlock = createSprite(200,15);
 invisibleBlock.width = climber.width;
 invisibleBlock.heigth = 1;
 invisibleBlock.x = door.x;
 invisibleBlock.velocityY = 5;
 invisibleBlock.visible = false;
 doorsGroup.add(door);
  invisibleBlockGroup.add(invisibleBlock);
  climbersGroup.add(climber);
  }
}
