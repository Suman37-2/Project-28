class Tree{

    constructor(x,y){
  
      var op={
          isStatic:true,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body=Bodies.rectangle(x,y,600,550,op);
      this.width=600;
      this.height=550;
      this.image=loadImage("tree.png");
      World.add(world,this.body);
  }
  
  display(){
      var pos=this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height);
  }
  }
    
  