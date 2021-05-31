var tom, to_runnin, tomsitting, toms;
var jerry, jerr_teasing, jer_happy, jerrys;
var bg, bg_display;


function preload() {
    //load the images here
    bg_display=loadImage("images/garden.png");

   tom=loadAnimation("images/cat1.png");
   to_runnin=loadAnimation("images/cat2.png", "images/cat3.png");
   tomsitting=loadAnimation("images/cat4.png");

   jerry=loadAnimation("images/mouse2.png");
   jerr_teasing=loadAnimation("teasing","images/mouse3.png");
   jer_happy=loadAnimation("happy","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   bg=createSprite(500,400,500,400);
   bg.addImage(bg_display);
   bg.scale=0.8;

   toms=createSprite(800,600,50,50);
   toms.addAnimation("silent",tom);
   toms.scale=0.1;

   jerrys=createSprite(300,600,50,50);
   jerrys.addAnimation("silent",jerry);
   jerrys.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(toms.x-jerrys.x<jerrys.width/2 + toms.width/2){
    toms.addAnimation("happy","images/cat4.png")
   toms.changeAnimation("happy","images/cat4.png")
   toms.velocityX=0;


}
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyDown("left")){
   jerrys.addAnimation("teasing", "images/mouse3.png");   
    jerrys.changeAnimation("teasing","images/mouse3.png","images/mouse2.png");

    toms.addAnimation("running","images/cat2.png", "images/cat3.png");
    toms.changeAnimation("running","images/cat2.png", "images/cat3.png");
    toms.velocityX=-3;
}

}
