class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2.5,
            length: 380
        }
        this.rope = Matter.Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);
       }

       /*attach(body){
        this.rope.bodyA=body;
    }
    
       fly(){
        this.rope.bodyA=null;
    }*/

    display(){
        //if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        noStroke();
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        //}
    }  
}