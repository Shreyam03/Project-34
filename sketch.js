var dog,happyDog,db,foodS,foodStock,dogImg,happyDogImg;

function preload()
{
  dogImg=loadImage("dogImg.png");
  happyDogImg=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  db=firebase.database();
  dog=loadImage("dogImg.png");
  foodStock=db.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog=loadImage("dogImg1.png");
  }
  image(dog,250,250,250,250)
  textSize(30)
  stroke("yellow")
  text("Milk Bottles Left:"+ foodS,100,100)
}
function readStock(value){
  foodS=value.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  if(x>0){
    x=x-1
  }
  db.ref("/").update({
    Food:x
  })
}



