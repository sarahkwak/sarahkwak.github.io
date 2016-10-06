var context;
var queue;
var WIDTH = 1120;
var HEIGHT = 748;
var mouseXPosition;
var mouseYPosition;
var batImage;
var stage;
var animation;
var deathAnimation;
var spriteSheet;
var poopXPos=100;
var poopYPos=100;
var poopXSpeed = 1.5;
var poopYSpeed = 1.75;
var score = 0;
var scoreText;
var gameTimer;
var gameTime = 0;
var timerText;


window.onload = function() {
  var canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');
  context.canvas.width = WIDTH;
  context.canvas.height = HEIGHT;
  stage = new createjs.Stage("myCanvas");

  // queue is the object we create to load the assests before javascript
  queue = new createjs.LoadQueue(false);
  queue.installPlugin(createjs.Sound);
  queue.on("complete", queueLoaded, this);
// loadManifest is createJS function 
	queue.loadManifest([
    {id: 'backgroundImage', src: 'game_images/background.png'},
  ]);
	queue.load();

	// setInterval does update. It will triggers function updateTime in every sec.
    gameTimer = setInterval(updateTime, 1000);
    //A Bitmap represents an Image, Canvas, or Video in the display list
} //end of window initialize

function queueLoaded(event){
  // add background image
  var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"))
    stage.addChild(backgroundImage);

} // queueLoaded(event)
  
updateTime = function() {

};
