class Launcher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.008,
            length: 10
        }
        this.bodyA = body
        this.pointB = anchor
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display(){
        if (this.launch.bodyA){
            var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
    fly(){
        this.launch.bodyA = null
    }
}