const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var division1,division2,division3,division4,division5,division6,division7;
var divisionHeight = 300;
var engine,world;
var ball1,ball2,ball3,ball4,ball5,ball6;
var ball7,ball8,ball9,ball10,ball11,ball12,ball13;
var doll1,doll2,doll3,doll4,doll5,doll6;
var doll7,doll8,doll9,doll10,doll11,doll12,doll13;
var coll1,coll2,coll3,coll4,coll5,coll6;
var coll7,coll8,coll9,coll10,coll11,coll12,coll13;
var joll1,joll2,joll3,joll4,joll5,joll6;
var rope1,rope2,rope3,rope4,rope5;
var score = 0 ;

//var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;
//var box14,box15,box16,box17,box18,box19,box20,ball1,ground1;
//var ground1;
function setup(){
    var canvas = createCanvas(480,650);
    engine = Engine.create();
    world = engine.world;

    division1 = new Box (0,500,10,210);
    division2 = new Box (80,500,10,210);
    division3 = new Box (160,500,10,210);
    division4 = new Box (240,500,10,210);
    division5 = new Box (320,500,10,210);
    division6 = new Box (400,500,10,210);
    division7 = new Box (480,500,10,210);
    ground1 = new Ground(600,600,1200,20);
    ball1 = new Ball(40,50);
    ball2 = new Ball(120,50);
    ball3 = new Ball(200,50);
    ball4 = new Ball(280,50);
    ball5 = new Ball(360,50);
    ball6 = new Ball(440,50);
    ball7 = new Ball(0,100);
    ball8 = new Ball(80,100);
    ball9 = new Ball(160,100);
    ball10 = new Ball(240,100);
    ball11 = new Ball(320,100);
    ball12 = new Ball(400,100);
    ball13 = new Ball(480,100);
    doll1 = new Ball(40,150);
    doll2 = new Ball(120,150);
    doll3 = new Ball(200,150);
    doll4 = new Ball(280,150);
    doll5 = new Ball(360,150);
    doll6 = new Ball(440,150);
    doll7 = new Ball(0,200);
    doll8 = new Ball(80,200);
    doll9 = new Ball(160,200);
    doll10 = new Ball(240,200);
    doll11 = new Ball(320,200);
    doll12 = new Ball(400,200);
    doll13 = new Ball(480,200);
    coll1 = new Ball(40,250);
    coll2 = new Ball(120,250);
    coll3 = new Ball(200,250);
    coll4 = new Ball(280,250);
    coll5 = new Ball(360,250);
    coll6 = new Ball(440,250);
    coll7 = new Ball(0,300);
    coll8 = new Ball(80,300);
    coll9 = new Ball(160,300);
    coll10 = new Ball(240,300);
    coll11 = new Ball(320,300);
    coll12 = new Ball(400,300);
    coll13 = new Ball(480,300);
    joll1 = new Ball(40,350);
    joll2 = new Ball(120,350);
    joll3 = new Ball(200,350);
    joll4 = new Ball(280,350);
    joll5 = new Ball(360,350);
    joll6 = new Ball(440,350);
    /*rope1 = new Rope(240,-50);
    rope2 = new Rope(240,-100);
    rope3 = new Rope(240,-200);
    rope4 = new Rope(240,-300);
    rope5 = new Rope(240,-500);*/

    
   /* box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    box15 = new Box(700,100,70,70);
    box16 = new Box(700,100,70,70);
    box17 = new Box(700,100,70,70);
    box18 = new Box(700,100,70,70);
    box19 = new Box(700,100,70,70);
    box20 = new Box(700,100,70,70);
    rope1 = new Rope(ball1.body,{x:500,y:50});*/
    


}

function draw(){
     background(180);
     Engine.update(engine);

     noStroke();
     textSize(25)
     fill("white")
     text("Score  " + score,60, 30)
     textSize(20)
        fill("white")
        text("500", 100,500)
        textSize(20)
        fill("white")
        text("500", 25,500)
        textSize(20)
        fill("white")
        text("500", 185,500)
        textSize(20)
        fill("white")
        text("500", 265,500)
        textSize(20)
        fill("white")
        text("500", 350,500)
        textSize(20)
        fill("white")
        text("500", 430,500)

     ground1.display();
     division1.display();
     division2.display();
     division3.display();
     division4.display();
     division5.display();
     division6.display();
     division7.display();
     ball1.display();
     ball2.display();
     ball3.display();
     ball4.display();
     ball5.display();
     ball6.display();
     ball7.display();
     ball8.display();
     ball9.display();
     ball10.display();
     ball11.display();
     ball12.display();
     ball13.display();
     doll1.display();
     doll2.display();
     doll3.display();
     doll4.display();
     doll5.display();
     doll6.display();
     doll7.display();
     doll8.display();
     doll9.display();
     doll10.display();
     doll11.display();
     doll12.display();
     doll13.display();
     coll1.display();
     coll2.display();
     coll3.display();
     coll4.display();
     coll5.display();
     coll6.display();
     coll7.display();
     coll8.display();
     coll9.display();
     coll10.display();
     coll11.display();
     coll12.display();
     coll13.display();
     joll1.display();
     joll2.display();
     joll3.display();
     joll4.display();
     joll5.display();
     joll6.display();
     /*rope1.display();
     rope2.display();
     rope3.display();
     rope4.display();
     rope5.display();*/
   /* box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball1.display();
    rope1.display();*/
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-30,width/2+30),10,10));
        score++;
    }

    for(var j = 0; j < particles.length; j++) {

        particles[j].display();
    }
    /*if(rope1.body.position.y>450){
        if(rope1.body.position.x<240 ){
            score = score+500; 
        }
    }
 
    if(rope2.body.position.y>450){
        if(rope2.body.position.x<240 ){
            score = score+500; 
        }
    }
 
    if(rope3.body.position.y>450){
        if(rope3.body.position.x<240 ){
            score = score+500; 
        }
    }
 
    if(rope4.body.position.y>450){
        if(rope4.body.position.x<240 ){
            score = score+500; 
        }
    }
 
    if(rope5.body.position.y>450){
        if(rope5.body.position.x<240 ){
            score = score+500; 
        }
    }*/
 
        
   // mouseDragged();
}

/*function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}*/