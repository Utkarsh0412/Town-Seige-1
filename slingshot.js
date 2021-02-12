class Slingshot{
    constructor(bodyA,pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.008,
           length:10
         }
         this.sling=Constraint.create(options)   
         this.bodyA=bodyA;
         this.pointB=pointB
         World.add(world,this.sling)
 
    }
   display(){

       
       if(this.sling.bodyA!==null){
   
       
       var pointA=this.sling.bodyA.position
       var pointB=this.pointB
       push()
       strokeWeight(3)
   line(pointA.x,pointA.y,pointB.x,pointB.y)
   pop()
   }
    }

   fly(){
   this.sling.bodyA=null
   
   }
}