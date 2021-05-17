class Chain{
    constructor(bodyA,bodyB){
      var options ={ 
          bodyA:bodyA,
          bodyB: bodyB,
          stiffness:0.5
      }
      
      this.Chain = Constraint.create(options)
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    
    {  var pos1 = this.Chain.bodyA.position
        var pos2 = this.Chain.bodyB.position
     stroke(0)
     strokeWeight(5)
        line
    }
  
  
  }
  