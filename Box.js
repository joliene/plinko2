class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
  }
};







































/*class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.04,
          isStatic:false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     // this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
     /* for(var k = 0;k<=this.width; k = k + 80) {
        divisions.push(new Divisions (k, height-divisionsHeight/2 , 10, divisionsHeight));
      }*/
     /* var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("white")
      rect( 0, 0, this.width, this.height);
      
      pop();
    }
}*/