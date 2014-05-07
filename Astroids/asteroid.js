(function (root) {
  Function.prototype.inherits = function (obj) {
    function Surrogate () {};
    Surrogate.prototype = obj.prototype;
    this.prototype = new Surrogate ();
  }

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  function randomVelocity () {
    var dx = Math.random() * -2;
    return [ dx, 0 ];
  }

  var Asteroid =
  Asteroids.Asteroid =
  function (pos, vel) {
    this.COLOR = 'green';
    this.RADIUS = 10;
    MovingObject.call(this, pos, vel, this.RADIUS, this.COLOR);
  };

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
    var x = Math.random() * dimX;
    var y = Math.random() * dimY;
    return (
      new Asteroid( [x, y], randomVelocity() )
    );
  };



})(this);