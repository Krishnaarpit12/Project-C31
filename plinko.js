class Plinkos {
   
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, options);
     
        World.add(world, this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS)
        fill("white");
        circle(pos.x, pos.y, 10)

        for(var j = 40; j <=width; j = j +50){
            plinkos.push(new Plinkos(j,75));
        }
        for(var j = 15; j <=width-10; j = j + 50){
            plinkos.push(new Plinkos(j,175));
        }
    
    }


}