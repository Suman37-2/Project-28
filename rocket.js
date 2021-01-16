class Glue{
    constructor(bodyA,pointB){
        var con={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length:10  
          }
          this.pointB=pointB;
          this.glue=Constraint.create(con);
          World.add(world,this.glue);  
    }

    fly(){
       this.glue.bodyA=null; 
    }

     attach(body){
      this.glue.bodyA=body;
     }

    display(){
     if(this.glue.bodyA){   
     var pointA=this.glue.bodyA.position;
     var pointB=this.pointB;
     strokeWeight(5);
     line(pointA.x,pointA.y,pointB.x,pointB.y);   
  }
}
}
