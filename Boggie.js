class Boggie{
    constructor(x,y,width,height){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("images/coach.png") 
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        rectMode(CENTER);
        image(this.image,this.body.position.x, this.image,this.body.position.y,this.width, this.height);
    }
  
  
  }
  