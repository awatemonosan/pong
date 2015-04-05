//settings

var settings = {
  height: 500,
  width: 720
};

//board

var board = d3.select('body').append('div')
  .attr('class', 'board')
  .style({
    height: settings.height + 'px',
    width: settings.width + 'px'
  });


  //scores


///ball
var Ball = function () {
  this.id = balls.length;
  this.size = 25;
  this.x = settings.width / 2;
  this.y = settings.height / 2;
  this.velocityX = 1;
  this.velocityY = 30;
};

Ball.prototype.move = function ( ){
  //update physics / do magic
  this.x = this.x + this.velocityX;
  this.y = this.y + this.veloctiyY;

  //handle ceiling and floor collisions
  if ( this.y >= settings.height ) {
    this.velocityY = -this.velocityY;
  }

  if ( this.y <= 0) {
    this.velocityY = -this.velocityY;
  }

  //handle paddle collisions

  //handle goal conditions

};

var balls = [];

balls.push(new Ball());



var update = function() {
  //update paddles

  //update balls
  //update physics
  for (var i = 0; i < balls.length; i++) {
    balls[i].move();
  }
  //update dom
  var ballElements = board.selectAll('.ball').data(balls, function(ball) {return ball.id;});
  //update
  ballElements.style({
    left: function(ball) { return ball.x + settings.width/2 +'px'; },
    top: function(ball) { return ball.y + settings.height/2 +'px'; }
  });

  //enter
  ballElements.enter().append('div')
  .attr('class', 'ball')
  .style({
    width: function(ball) {return ball.size + 'px';},
    height: function(ball) {return ball.size + 'px';}
  });
  //exit
};

setInterval(update, 50);

//player 1 paddle


//player 2 paddle
