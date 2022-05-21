bed = "";
status1 = "";

function preload(){
    bed = loadImage("bed.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    object_Detector.detect(bed, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(bed, 0, 0, 640, 420);
}
