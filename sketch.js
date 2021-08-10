var player;
var flower;
var obstruction;

function setup() {
  createCanvas(800,400);
  obstruction = createSprite(400, 200, 50, 50);
  player = createSprite(300,200,20,20)


  flowerGroup = new Group();
}

function draw() {
  background("beige");  
  
    if(player.isTouching(obstruction)){
      flowers();
    }
    


   if(keyDown(UP_ARROW)){
     
      player.y-=4


   }

   if(keyDown(DOWN_ARROW)){
     
    player.y+=4
    }
    
    if(keyDown(RIGHT_ARROW)){
     
      player.x+=4
      }
      
    if(keyDown(LEFT_ARROW)){
     
        player.x-=4
      }
      
  
  
  
  
  
  
  
  drawSprites();





}



function flowers(){
  if(frameCount%20===0){

    //giving random x and y positions for zombie to appear
    flower = createSprite(random(0,800),0,5,5)

   
    flower.velocityY = +3
    flower.debug= true
    flower.setCollider("rectangle",0,0,40,40)
   
    flower.lifetime = 400
    flowerGroup.add(flower)
  }

}
