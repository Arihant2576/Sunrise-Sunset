const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    if(hour >= 01 && hour < 12){
        fill("black");
        textSize(30);
        text("Time : " + hour + "AM", 100, 100);
    }
    else if(hour >= 12 && hour < 23){
        fill("black");
        textSize(30);
        text("Time : " + (hour - 12) + "PM", 100, 100);
    }
    else {
        fill("black");
        textSize(30);
        text("Time : 12AM", 100, 100);
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11, 13);
    if(hour >= 05 && hour <= 06){
        bg = "sunrise1.png";
    }
    else if(hour >= 06 && hour <= 07){
        bg = "sunrise2.png"
    }
    else if(hour >= 07 && hour <= 08){
        bg = "sunrise3.png"
    }
    else if(hour >= 08 && hour <= 10){
        bg = "sunrise4.png"
    }
    else if(hour >= 10 && hour <= 13){
        bg = "sunrise5.png"
    }
    else if(hour >= 13 && hour <= 14){
        bg = "sunset1.png"
    }
    else if(hour >= 14 && hour <= 15){
        bg = "sunset2.png"
    }
    else if(hour >= 15 && hour <= 17){
        bg = "sunset3.png"
    }
    else if(hour >= 17 && hour <= 19){
        bg = "sunset4.png"
    }
    else if(hour >= 19 && hour <= 22){
        bg = "sunset5.png"
    }
    else if(hour >= 22 && hour <= 05){
        bg = "sunset6.png"
    }
    backgroundImg = loadImage(bg);
}
