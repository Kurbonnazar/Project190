function setup() {
  createCanvas(1000,600);
  snowbroad=createSprite(500, 500, 50, 50);
  snowbroad.addImage("snowbroad",snowbroadimage)
  snowbroad.scale= 1.3
  coinGroup= new Group()
  
  
}

function coins(){
  if (frameCount % 60===0){
    var coin =createSprite(600,0,40,10);
    coin.x= Math.round(random(80,900));
    coin.addImage(coinImage);
    coin.scale= 0.5;
    coin.velocityY= 3;

    coin.lifetime=200;

    coinGroup.add(coin)
  }
}

function draw() {
  background(backgroundimage); 
  coins() 
  if(keyDown("left")){
    snowbroad.x-= 5
  }
  if(keyDown("right")){
    snowbroad.x+=5
  }
  drawSprites();
}

function preload(){
  backgroundimage= loadImage("Background.avif")
  snowbroadimage= loadImage("Starting.png")
  coinImage= loadImage("Coins.png")
}