
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var st;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey = createSprite(80,315,10,40);
  monkey.addAnimation("monkey",monkey_running)
  score = 0;
 monkey.scale = 0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("pink");
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score, 450, 50);
  
   stroke("black");
  textSize(20);
  fill("black");
  st = Math.ceil (frameCount / frameRate());
  text("Survival Time: " + st, 100, 50);
  if(keyDown("space"))
    {
      monkey.velocityY = -10;
    }
  if(ground.x<0)
    {
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  food();
  spawnObstacle();
  drawSprites();
}

function food()
{
  if(frameCount%80 === 0)
    {
      banana = createSprite(600,100,10,10);
      banana.addImage(bananaImage)
      banana.scale = 0.1;
      banana.velocityX = -4;
      banana.y = Math.round(random(120,200));
      
      FoodGroup.add(banana);
      banana.lifetime = 200;
    }
}

function spawnObstacle()
{
   if(frameCount%300 === 0){
     obstacle = createSprite(400,330,10,10);
      obstacle.addImage(obstacleImage)
      obstacle.scale = 0.1;
      obstacle.velocityX = -4;
      
      
      obstacleGroup.add(obstacle);
      obstacle.lifetime = 200;
   }
}





