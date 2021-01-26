//Create variables here
var dog, happydog, database, food, foodstock;
var doggo, feedButton, addFoodButton;
var fedtime, lastFed, foody;

function preload() {
  //load images here
  dog = loadImage("images/dog.png");
  happydog = loadImage("images/dogh.png");
}

function setup() {
  createCanvas(500, 500);
  doggo = createSprite(250, 300);
  doggo.addImage("doggoanimation", dog);
  doggo.addImage("happydoganimation",happydog);
  doggo.scale = 0.2;

  database = firebase.database();
  foody = new Food();
  foody.getFoodStock();

  feedButton = createButton("Feed dog");
  feedButton.position(365,300);

  addFoodButton = createButton("Buy Food to refill food stock");
  addFoodButton.position(365,350);
}



function draw() {
  //background
  background("cyan");

  //text
  fill ("yellow");
  textSize (28);
  text ("Note : Click on the up arrow",10,50);
  text ("key to feed the dog!",10,75);
  text ("Note : Click on the down arrow",10,125);
  text ("key to buy more food and",10,150);
  text ("refill the food stock!",10,175);

  //display food and food stock
  text("Food stock: "+foodstock,20,450);
  text("Food given to the dog: "+food,20,400);
  drawSprites();
  
  //change food and food stock
  feedButton.mousePressed()=()=>
  {
      foody.updateFoodStock(1); 
  }

  addFoodButton.mousePressed()=()=>
  { 
    foody.refillFoodStock();
  } 

}
