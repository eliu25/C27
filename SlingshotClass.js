class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.4,
            length: 10
        }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
}
display(){
var a=this.sling.bodyA.position;
var b=this.sling.bodyB.position;
strokeWeight(5);
stroke ("red");
line ( a.x, a.y, b.x, b.y);
}
}