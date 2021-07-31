var ship, ship_running, edges;
var seaImg;
var sea;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
  seaImg= loadImage("sea.png");
}

function setup(){
  createCanvas(900,500);
  
   //creating ground
   sea=createSprite(200,180,400,10);
   sea.addImage("moving",seaImg);
   sea.scale=1;
   sea.velocityX=-4;

  // creating trex
  ship = createSprite(200,160,20,50);
  ship.addAnimation("running", ship_running);
  
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  ship.scale = 0.2;
  ship.x = 100;
  ship.y = 300;
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(ship.x)
  
 
  //making ground endless
  if (sea.x<0) {
    sea.x=sea.width/2;
  }



  ship.velocityx = ship.velocitx + 0.5;
  
  //stop trex from falling down
 
  drawSprites();
}
