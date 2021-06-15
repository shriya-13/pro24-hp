class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius= radius/2;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(CENTER);
      fill("red");
      ellipse(pos.x,pos.y, this.raduis);
    }
  };
  