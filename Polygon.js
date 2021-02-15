class pol{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:1.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("polygon.png")
    }
    display(){
      var pos =this.body.position;
      push()
  translate(pos.x,pos.y)
      imageMode(CENTER);
      fill("blue");
      image(this.image,0, 0, this.width, this.height);
      pop ()
    }
  };