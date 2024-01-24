function preload (){

}

function setup () {
    crateCanvas(300,300)
    canvas.center();
}

function draw() {
    
}

function modelLoaded() {
    poseNet("poseNet", initalize)
}