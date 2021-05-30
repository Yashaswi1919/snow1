var backgroundImg;
var snow1,snow2,snow3,snow4,snow5,snow6;
var snow1Img,snow2Img,snow3Img,snow4Img,snow5Img,snow6Img;







function preload(){
  backgroundImg=loadImage("snow3.jpg");
  snow1Img=loadAnimation("snow4.webp");
  snow2Img=loadAnimation("snow5.webp");
  snow3Img=loadAnimation("snow4.webp");
  snow4Img=loadAnimation("snow5.webp");
  snow5Img=loadAnimation("snow4.webp");
  snow6Img=loadAnimation("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  
  snow1 = createSprite(500,300,20,20); 
  snow1.addAnimation("s",snow1Img); 
  snow1.scale = 0.2;

  snow2 = createSprite(100,200,15,15);
  snow2.addAnimation("s",snow2Img);
  snow2.scale = 0.2;

  snow3 = createSprite(200,50,20,20);
  snow3.addAnimation("s",snow3Img);
  snow3.scale =0.2;

  snow4 = createSprite(500,100,20,20);
  snow4.addAnimation("s",snow4Img);
  snow4.scale=0.2;

  snow5 = createSprite(500,400,20,20);
  snow5.addAnimation("s",snow5Img);
  snow5.scale=0.2;

  snow6 = createSprite(250,350,20,20);
  snow6.addAnimation("s",snow6Img);
  snow6.scale=0.2;
}

function draw() {
  background(backgroundImg);
    
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  drawSprites();
  }
