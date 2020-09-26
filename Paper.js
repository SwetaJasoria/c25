class Paper {
    constructor(x, y, radius) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          // 'friction':0.5, 
          'friction': 1, 
          // 'density': 1.2,  
          'density': 0.1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      this.image = loadImage("paper.png");
  
      World.add(world, this.body);

      
    }
    display(){
      var paperpos =this.body.position;
  
      push();
      // translate(paperpos.x, paperpos.y);

      // ellipseMode();
      // ellipse(paperpos.x, paperpos.y, this.radius, this.radius);

      imageMode(RADIUS);
      image(this.image, paperpos.x, paperpos.y, this.radius, this.radius);
      pop();
    }
  }
  