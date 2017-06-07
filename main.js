var capture, canvas, img;
var photoButton, downloadButton;
//elements which are made once during launching app
function setup() {
  capture = createCapture(VIDEO);
  photoButton = createButton('Take a photo!');
  photoButton.parent('controlPanel');
  photoButton.mouseClicked(getImage);
  canvas = createCanvas(640,480);
  downloadButton = createButton('Download a photo!');
  downloadButton.parent('controlPanel');
  downloadButton.mouseClicked(download);
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  }
}
//getting image from capture
function getImage() {
  img = capture.get(0,0,width,height);
  image(img,0,0);
}

function download() {
    saveCanvas(canvas, 'portrait-' + random(1000), 'jpg');
}
