// I like 🍪's
objectDetector= "";

img = "";
objects = [];

function preload(){
  img = loadImage('img/op3.jpg');
}
function setup() { 
    canvas = createCanvas(380,380);
    canvas.center();
    canvas.parent("canvas")
    objectDetector=ml5.objectDetector('cocossd',modelLoaded); 
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}
/*
function draw(){
    image(img,0,0,380,380);//cover the canvas with image
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detector(video,gotResult);
        for(i=0;i<objects.length;i++){
           document.getElementById("status").innerHTML="status: object Detected";
           document.getElementById("number_of_objects").innerHTML='number of objects detected are:'+objects.length;
           fill(r,g,b);
           percent=floor(objects[i].confidence*100);
           text(object[i].label+" " + percent + "%",objects[i].x,objects[i].y);
           noFill();
           stroke(r,g,b);
           rect(objects[i].x,object[i].y,objects[i].width,objects[i].height); 
        }
    }
}
*/
function modelLoaded(){
  console.log("we have loaded!!!") 
  objectDetector.detect(img,gotResult);
}


function draw() {
  image(img, 0, 0, 640, 420);
}
function gotResult(error,results){
  if(error){
    console.error(error)// (!_!)
  }
  for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Object Detected";
    
      fill(255, 0, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke(255, 0, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
}
