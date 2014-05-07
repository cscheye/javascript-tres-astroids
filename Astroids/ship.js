(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function(pos){
    this.pos = pos;
    Asteroids.MovingObject.call(this, pos, [0, 0], Ship.RADIUS, Ship.COLOR);
  };

  Ship.RADIUS = 15;
  Ship.COLOR = "white";

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})(this);