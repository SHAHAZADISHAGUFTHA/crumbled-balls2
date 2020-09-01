class Paper{

    constructor(x,y,radius){

	var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
       density:1.5
            
        
            }
            this.radius=radius;
            this.image=loadImage("paper.png");
            
            this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        
        }   



display() { 
  var paperpos=this.body.position;
  var angle=this.body.angle;
   push() 
   translate(paperpos.x, paperpos.y);
   rotate(angle);
    imageMode(RADIUS); 
    
    image(this.image,0,0,this.radius, this.radius); 
    pop() }
}