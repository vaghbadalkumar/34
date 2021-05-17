class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("images/rock1.png")
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        rectMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  