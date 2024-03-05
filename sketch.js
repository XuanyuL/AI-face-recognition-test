let mobilenet;
let video;
let classifier;
let label='loading model';
let simleButton;
let sadButton;
let trainButtun;


function modelReady(){
  console.log('Model is ready!');
  classifier.load('https://raw.githubusercontent.com/XuanyuL/AI-face-recognition-test/main/model.json', customModelReady);
}

function customModelReady(){
  console.log('Custom model is ready!');
  
  classifier.classify(gotResults);
  label = 'model ready';
}

function videoReady(){
  console.log('video is ready!');
}

function gotResults(error, results){
  if(error){
    console.error(error);
  }else{
    console.log(results);
    label = results[0].label;
    classifier.classify(gotResults);
  }
}

function setup(){
  createCanvas(320,280);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet',modelReady);
  classifier = mobilenet.classification(video,videoReady);
}

function draw(){
  background(0);
  image(video,0,0,320,280);
  fill(255);
  textSize(16);
  document.getElementById('label').innerText = label;


}




