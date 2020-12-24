class Ground{

    constructor(x,y){
  
      var op={
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,2000,20,op);
      this.width=2000;
      this.height=20;
      World.add(world,this.body);
  }
  
  display(){
      var pos=this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
  }
  }
    
  