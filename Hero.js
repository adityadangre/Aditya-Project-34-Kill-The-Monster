class Hero {
    constructor(x,y,r) {
      var options = {
          density:1.0,
          frictionAir:1.0
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("images/Superhero-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image,pos.x,pos.y,this.r*2, this.r*2)
      pop();
    }
}