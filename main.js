noseX=0;
noseY=0;
function preload() {
clown_nose=loadImage("https://i.postimg.cc/bNRSyCB4/clown-nose.png");
hat=loadImage("https://i.postimg.cc/FK46yKZY/cowboy-hat.png");
}
function setup() {
 canvas=createCanvas(450,450);
 canvas.center();
video=createCapture(VIDEO);
video.size(450,450);
video.hide();
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',got_poses)
}
function modelloaded() {
console.log("modelloaded");
}

function got_poses(results) {
if( results.length>0 ){
    noseX=results[0].pose.nose.x-7;
    noseY=results[0].pose.nose.y-5;
    console.log(results);
    console.log("nose x="+ results[0].pose.nose.x);
    console.log("nose y="+ results[0].pose.nose.y);
}
}

function draw() {
image(video,0,0,450,450);
image(clown_nose,noseX,noseY,30,30);
image(hat,noseX-100,noseY-220,200,150);
}

function take_snapshot() {
    save("clown picture.png")
}