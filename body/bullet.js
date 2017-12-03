function Bullet(I) {
  I.active = true;

  I.xVelocity = I.horizonal
  I.yVelocity = -I.speed;
  I.width = 23;
  I.height = 23;
  I.color = "#000";

  I.inBounds = function() {
    return I.x >= 0 && I.x <= CANVAS_WIDTH &&
      I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  I.sprite = Sprite("enemyBullet");

  I.draw = function() {
    this.sprite.draw(canvas1, this.x, this.y);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
};


function EnemyBullet(I) {
  I.active = true;

  I.xVelocity = 0;
  I.yVelocity = -I.speed;
  I.width = 28;
  I.height = 54;
  I.color = "#000";

  I.inBounds = function() {
    return I.x >= 0 && I.x <= CANVAS_WIDTH &&
      I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  I.sprite = Sprite("Bullet");

  I.draw = function() {
    this.sprite.draw(canvas1, this.x, this.y);
  };

  I.update = function() {
    I.x += I.xVelocity;
    I.y -= I.yVelocity;

    I.active = I.active && I.inBounds();
  };

  return I;
};
