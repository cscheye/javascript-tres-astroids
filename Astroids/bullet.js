(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function (pos) {
    Asteroids.MovingObject.call(this, pos, Bullet.VELOCITY, null, Bullet.COLOR);
  };

  Bullet.VELOCITY = [10,0];
  Bullet.COLOR = 'red';
Bullet.inherits(Asteroids.MovingObject);
  Bullet.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], 10, 4);
  }


})(this);