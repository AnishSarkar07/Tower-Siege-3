var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var stand = [];
var plinkos = [];
var boxes =[];
var boxHeight=200;
var score =0;
function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     boxes.push(new Boxes(k, height-boxHeight/2, 10, boxHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     stand.push(new Stand (random(100, 700), 10,10));
     score++;
   }
 
  for (var j = 0; j < stand.length; j++) {
   
     stand[j].display();
   }
   for (var k = 0; k < boxes.length; k++) {
     
     boxes[k].display();
   }
}