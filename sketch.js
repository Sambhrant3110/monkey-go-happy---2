var monkey , monkey_running,stop,jungleimg,jungle;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground;
var score=0;
var gameState=1,play=1,end=0;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  stop.loadImage = loadImage("sprite_0.png");
  jungleimg = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,440,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.3;
  ground = createSprite(250,476,500,10);
  FoodGroup = new Group();
  obstacleGroup = new Group();
  jungle = createSprite(250,250,20,20);
  jungle.addImage(jungleimg);
  jungle.velocityX=-6; 
  monkey.depth=jungle.depth
  monkey.depth=monkey.depth+3;
  obstacleGroup.debug=true;
}


function draw() {
  background("1");
drawSprites();
  if (jungle.x<200){
    jungle.x = jungle.width/2;
  }
 
  monkey.velocityY=monkey.velocityY + 0.8;
monkey.collide(ground);
  
 
  
     if (keyDown("space")&&monkey.y>300){
    monkey.velocityY=-17;
  }
    
  food();
  spawnobstacles()
  stroke("white")
  textSize(20)
  fill("black")
  text("score="+score,300,100);
 
   if (obstacleGroup.isTouching(monkey)){
     monkey.scale=0.2;
     score=0;
   }
}
 
function food(){
  if (frameCount%80===0){
    banana = createSprite(500,180,10,10);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(180,200));
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=100;
    FoodGroup.add(banana);
    if (FoodGroup.isTouching(monkey)){
      score=score+1;
      FoodGroup.destroyEach();
      var rand = Math.round(random(1,5))
    switch(score){
        
      case 1: monkey.scale=0.3;
      break;
      case 2: monkey.scale=0.4;
      break;
      case 3: monkey.scale=0.5;
      break;
      case 4: monkey.scale=0.6;
      break;
      case 5:monkey.scale=0.8;
      break;
      default: break;
    
    }
    }  
  }
  }

function spawnobstacles(){
  if (frameCount%300==0){
  obstacle = createSprite(450,440,10,10)
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-6;
  obstacle.lifetime=150;
  obstacle.depth=ground.depth
  obstacle.depth=obstacle.depth+1
  monkey.depth=monkey.depth+2;
  obstacleGroup.add(obstacle);      
  obstacle.debug=true;
  }
}







