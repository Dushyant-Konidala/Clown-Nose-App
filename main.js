var noseX = 0;
var noseY = 0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/xCHTqMCf/pngtree-clown-red-nose-animation-illustration-image-1243961-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose,noseX,noseY,30,30);
    
}

function take_snapshot(){
    save("myFilteredImage");
}
function modelLoaded(){
    console.log("The model is ready to use.");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x is = "+ results[0].pose.nose.x);
        console.log("nose y is = "+ results[0].pose.nose.y);
        
    }
}