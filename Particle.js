class Rope{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,10,options)
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body)
    }
    display(){
        var paperpos=this.body.position

        push()
     //   this.body.x = mouse.x;
       // this.body.y = mouse.y;
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        //strokeWeight(3);
       // fill(255,0,255)
        ellipse(0,0,10);
        pop()
    }
}
























































/*class Rope {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
            this.pointB=pointB;
            this.rope=Constraint.create(options)
            World.add(world, this.rope)
        }
      
        attach(body){
            this.rope.bodyA=body;
        }

       fly(){
            this.rope.bodyA=null;
        }
    
        display() {
         if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4)
            stroke(48,22,8)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop();
        }
            
        }

  }*/