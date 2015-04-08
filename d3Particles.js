var particles=[];
var nextParticleUniqueID=0;
var Particle = function(){
  //these should only be set on live particles
  this.ID=null;
  this.x=null;
  this.y=null;
};

Particle.prototype.spawn=function(x,y,element){
  this.ID=nextParticleUniqueID;
  nextParticleUniqueID++;

};

//Effects say what particles are created and how.
var Effect = function(){
  this.particles=[];
};

Effect.prototype.spawn=function(x,y,element){

};
