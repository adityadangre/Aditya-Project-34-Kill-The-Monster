class Monster {
    constructor(x,y,r) {
      var options = {
          restitution:0,
          friction:0.3,
          density:1.0,
          isStatic:false
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, (this.r)/10, options);
      this.image = loadImage("images/Monster-01.png")
      World.add(world, this.body);
      this.visiblity=225;
    }

    display(){
      if(this.body.speed<5){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, pos.x,pos.y,(this.r)/4, (this.r)/4)
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity=this.visiblity-5;
        tint(255,this.visiblity);
        rect(this.body,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
}