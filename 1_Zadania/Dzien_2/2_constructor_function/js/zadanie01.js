var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;

}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true){
    // przed isFunctional dodalalam this
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname;
  // czyzby?this? to zmienilam
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};

const robot1 = new Robot("first");
console.log(robot1);
console.log(robot1.name);


robot1.sayHi("you");
robot1.changeName("second");
robot1.fixIt();
