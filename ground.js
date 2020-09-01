class round{

    constructor(x,y,width,height){
    
var options={
    isStatic:true
                                                                                        
}

this.width=width;
this.height=height;
this.body=Bodies.rectangle(x,y,width,height,options);
stroke(0,255,246)
strokeWeight(3)
fill(255,248,119);
World.add(world,this.body);

}

display(){

var pos=this.body.position;
push();
    rectMode(CENTER);
   
    rect(pos.x,pos.y,this.width,this.height);
  pop();
}
}