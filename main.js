function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}

function draw(){
}

function take_snapshot(){
    save("my_picture.png");
}

function lipstick_view(){
    document.getElementById("body").style.backgroundIMage  = 'lipstick.jpg' ;
}