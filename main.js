var capture, canvas, img;

function setup() {
  capture = createCapture(VIDEO);
  capture.mouseClicked(getImage);
  canvas = createCanvas(640,480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  }
}
function getImage() {
  img = capture.get(0,0,width,height);
  image(img,0,0);
}
function keyPressed() {
  if(keyCode === ENTER){
    saveCanvas(canvas, 'portrait', 'jpg');
  }
}
