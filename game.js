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
    {id: 'backgroundImage', src: '../../blog/Screen-shot/green-background.jpeg'},
    {id: 'poopbag', src: '../../blog/Screen-shot/poop_bag.jpg'},
    {id: 'poop', src: '../../blog/Screen-shot/unicorn_poop.jpg'},
    {id: 'fart_sound', src: '../../blog/Screen-shot/dog_front.jpeg'},
    {id: 'dog_bark', src: '../../blog/Screen-shot/dog_bark.mp3'},
    {id: 'sunny_day', src: '../../blog/Screen-shot/sunny_day.mp3'}
  ]);
	queue.load();

	// setInterval does update. It will triggers function updateTime in every sec.
	gameTimer = setInterval(updateTime, 1000);
} //end of window initialize

//A Bitmap represents an Image, Canvas, or Video in the display list
function queueLoaded(event){
	// add background image
	
} // queueLoaded(event)
	
