var num = 2000;
var range = 6;

//position of point
var posX = [];
var posY = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  for ( var i = 0; i < num; i++ ) {
    posX[i] = width / 3;
    posY[i] = height / 3;
  }
  frameRate(500);
}

function draw() {
  background(27,104,91);

  // 2 points to left
  for ( var i = 2; i < num; i++ ) {
    posX[i - 1] = posX[i+4];
    posY[i - 1] = posY[i+4];
  }

  // Put a new value at the end of the array
  posX[num - 1] = posX[num - 1] + random(-25, 25);
  posY[num - 1] = posY[num - 1] + random(-25, 25);

  // Constrain all points to the screen
  posX[num - 1] = constrain(posX[num - 1], 0, width);
  posY[num - 1] = constrain(posY[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    var val = j*.75 / num * 255.0 + 51;
    stroke(val,val,11*val);
      strokeWeight(4);
      noFill();
    line(posY[j - 1], posX[j - 2], posY[j], posX[j]);
      line(posX[j - 4], posY[j - 1], posX[j], posY[j]);

      
  }
}
