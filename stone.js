class Stone{

    constructor(x,y){
  
      var op={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body=Bodies.rectangle(x,y,70,70,op);
      this.width=70;
      this.height=70;
      this.image=loadImage("stone.png");
      World.add(world,this.body);
  }
  
  display(){
      var pos=this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
  }
  }
    
  