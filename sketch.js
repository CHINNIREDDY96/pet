//Create variables here
var dog,dogimg,dogimg1,database,position;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  dog = createSprite(400,400,10,10);
  dog.addImage(dogimg);
  dog.scale  = 0.5

  var foodstock = database.ref('food');
  foodstock.on("value",readstock,showError);
 //Text = createSprite(400,100)
}


function draw() {  
  background("green");

  textSize(20);
  fill("black");
  text("Press up arrow ",400,100);
  
  
  
 if(keyDown(UP_ARROW)){
  writestock(foodstock);
  if(foodstock < 0 ){
    foodstock = 0

  } 
  else{
    foodstock = foodstock -1
  } 
 dog.addImage(dogimg1);
 dog.scale = 0.5;
 }
 

  

  drawSprites();
  //add styles here

 // var Text = "press up arrow";

  

  
 

  
}

function writestock(writingstock){
  database.ref('/').set({
    food : writingstock
   } )
}

function readstock(data){
  foodstock = data.val();
  

}

function showError(){
  console.log("Error in database");
}




