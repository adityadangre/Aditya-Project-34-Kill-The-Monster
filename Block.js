class Block{
    constructor(x,y){
      var options={
        restitution:0.8,
        friction:1.0,
        density:20
      }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.visiblity=225;

    }

    display(){
        if(this.body.speed<8){
          var pos =this.body.position;
          push();
          rectMode(CENTER);
          stroke ("black");
          strokeWeight(4);
          fill("red");
          rect(pos.x, pos.y, 50, 50);
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