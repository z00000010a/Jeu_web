function Enemy(I) {
I = I || {};
var delay = 0;


I.active = true;
I.age = Math.floor(Math.random() * 128);

I.color = "#A2B";

I.x = CANVAS_WIDTH / 4 + Math.random() * CANVAS_WIDTH / 2;
I.y = 0;
I.xVelocity = 0
I.yVelocity = 3;

I.width = 76;
I.height = 55;

I.inBounds = function() {
  return I.x >= 0 && I.x <= CANVAS_WIDTH &&
    I.y >= 0 && I.y <= CANVAS_HEIGHT;
};

I.sprite = Sprite("emeny");

I.draw = function() {
  this.sprite.draw(canvas1, this.x, this.y);
};
I.update = function() {
  I.x += I.xVelocity;
  I.y += I.yVelocity;

  I.xVelocity = 2 * Math.sin(I.age * Math.PI / 64);

  I.age++;

  I.active = I.active && I.inBounds();
};

I.shoot = function() {
  var bulletPosition = this.midpoint();
  bulletPosition.y += 40;
  if (delay>15) {
    enemyBullets.push(EnemyBullet({
      speed: 10,
      x: bulletPosition.x,
      y: bulletPosition.y
    }));
    delay = 0;
  }else {
    delay++;
  }

};

I.midpoint = function() {
  return {
    x: this.x + this.width/2,
    y: this.y + this.height/2
  };
};

I.explode = function() {
this.active = false;
// Extra Credit: Add an explosion graphic
};

return I;
};
