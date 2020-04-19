
var diag = [0, 1, 2, 3, 4, 5, 6, 7,8,9, 9,9,9,9,9,9,9,9,9,9,8,7, 6, 5, 4, 3, 2, 1];
var diagCount = 0;
var rectSize;
var gutter;
var gutterRatio = 0.05;
var img = [];
var columns = 15;
var logo;
var type;

function preload(){
  logo = loadImage("logo.jpg");
  type = loadImage("text.jpg");
  img[1] = loadImage("blue.jpg");
  img[2] = loadImage("gold.jpg");
  img[3] = loadImage("red.jpg");
  img[0] = loadImage("grey.jpg");
  img[4] = loadImage("blue1.jpg");
  img[5] = loadImage("gold1.jpg");
  img[6] = loadImage("red1.jpg");
  img[7] = loadImage("grey1.jpg");

}

function setup() {

  var canvas = createCanvas(windowWidth, windowWidth / 15 * 9);
  canvas.parent('sketch-holder');
  canvas.style('display', 'block');

  background(255);
  noStroke();
  fill(255);
 rect(0,0,windowWidth, windowWidth / 15 * 9);
 
  
  rectSize = windowWidth / 15;
  gutter = rectSize * gutterRatio;
  rectSize = rectSize * (1 - gutterRatio);

  
  
}

function draw() {
  var i;
  fill(240);
  noStroke();
  frameRate(47);
  for (i = 0; i < diag[diagCount]; i++) {

    var y = i;
    var x = diagCount - 1 - i;
    if (diagCount > columns) {
      y = y + diagCount - columns;
      x = x - diagCount + columns;

    }
  
    image(img[int(random(0, 8))], x * (rectSize + gutter), y * (rectSize + gutter), rectSize, rectSize);
    //image(img[1],x*(rectSize+gutter), y*(rectSize+gutter));
  }

 
  var j;
  if (diagCount>=22){
  for (i = 0; i < columns; i++) {
    for (j = 0; j < 9; j++) {
      if ((abs(pmouseX-mouseX)>1) && (abs(pmouseY-mouseY)>1))
      if (mouseX >= i * (rectSize + gutter) && mouseX <= i * (rectSize + gutter) + rectSize) {
        if (mouseY >= j * (rectSize + gutter) && mouseY <= j * (rectSize + gutter) + rectSize) {
            fill(255);
            rect(i * (rectSize + gutter)-gutter, j * (rectSize + gutter)-gutter, rectSize+gutter*2, rectSize+gutter*2);
            image(img[int(random(0, 8))], i * (rectSize + gutter), j * (rectSize + gutter), rectSize, rectSize);
          }
        }
      }
    }
}

  if (diagCount>=5){
    image(logo, 2 * (rectSize + gutter), 2 * (rectSize + gutter), rectSize*3+gutter*2, rectSize);
    
  }
  if (diagCount >= 14){
    image(type, 10 * (rectSize + gutter), 3 * (rectSize + gutter), rectSize*3+gutter*2, rectSize*2+gutter);
  }
  
   diagCount++;
  }
  


  function windowResized() {
    diagCount = 0;
    background(255);
    resizeCanvas(windowWidth, windowWidth / 15 * 9);
    rectSize = windowWidth / columns;
    gutter = rectSize * gutterRatio;
    rectSize = rectSize * (1 - gutterRatio);
    redraw();
  }
