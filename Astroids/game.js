(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx){
    this.ctx = ctx;
    this.DIM_X = 1000;
    this.DIM_Y = 800;
    this.FPS = 30;
    this.asteroids = [];
  };

  Game.prototype.addAsteroids = function(nAsteroids){
    for(var i = 0; i < nAsteroids; i++){
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y));
    }
  };

  Game.prototype.draw = function(){
    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    var asteroids = this.asteroids;
    for(var i = 0; i < asteroids.length; i++){
      asteroids[i].draw(this.ctx);
    }
  };

  Game.prototype.move = function(){
    var asteroids = this.asteroids;
    for(var i = 0; i < asteroids.length; i++){
      asteroids[i].move();
    }
  };

  Game.prototype.step = function(){
    this.move();
    this.draw();
  };

  Game.prototype.start = function(){
    var game = this;
    window.setInterval(function(){
      game.step();
    }, game.FPS);
  };
})(this);