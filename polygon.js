class Polygon{
    constructor(x,y,r){
        var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.8
         
        }
        this.x=x;
		this.y=y;
	    this.r=r;
		this.image=loadImage("polygon.png")
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		World.add(world, this.body);
    }
    display()
    {
        var stonePos=this.body.position;	
		push()
		translate(this.body.position.x,this.body.position.y)
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
		pop() 
    }
}