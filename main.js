function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video =   createCapture(VIDEO);  
    video.size(300, 300);
    video.hide(); 
    
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', GotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

//our wriiten functions

function take_snapshot(){
    save("my_picture.png");
}

function modelReady(){
    console.log('model is intialised!');
}

function GotPoses(results){
   if(results.length > 0){
       console.log(results);
       console.log(" nose x = " + results[0].pose.nose.x);
       console.log(" nose y = " + results[0].pose.nose.y);

   }
}



