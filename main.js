function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
  SCoin=loadSound('coin.wav');
  SGameOver=loadSound('gameover.wav');
  SJump=loadSound('jump.wav');
  SKick=loadSound('kick.wav');
  SDie=loadSound('mariodie.wav');
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	v1=createCapture(VIDEO);
  v1.size(800,400);
  v1.parent("game_console");
  posenet=ml5.poseNet(v1,modelloaded);
  posenet.on("pose", recognition)
}
function recognition(results){
  if (results.length>0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
  }
}
function modelloaded(){
  console.log("modelloaded");
}

function draw() {
	game()
}






