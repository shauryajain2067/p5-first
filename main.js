function setup(){
canvas=createCanvas(600,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function preload(){

}
function draw(){
    image(video,0,0,200,200);
    fill("green"); 
    stroke("red");
    circle(250,250,100);
    rect(100,300,50,50);
    rect(300,100,50,50);
    rect(500,300,50,50);
}