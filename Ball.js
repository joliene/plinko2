class Ball{
  constructor(x,y,r){
      var options={
          isStatic:true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.r=15;
      this.body=Bodies.circle(this.x,this.y,15,options)
      World.add(world, this.body)
  }
  display(){
      var paperpos=this.body.position

      push()
   //   this.body.x = mouse.x;
     // this.body.y = mouse.y;
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER)
      strokeWeight(1);
      stroke(0);
      fill("white")
      ellipse(0,0,15);
      pop()
  }
}

















































/*class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
            frictionAir:0.005,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       // rectMode(CENTER);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}*/