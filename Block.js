class  block{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility=255
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");

      
    
    if(this.body.speed<5){
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
 
      World.remove(world,this.body)
      push();
      this.visibility=this.visibility-5
      pop();
    }
    
   console.log(this.body.speed)
    }
  };