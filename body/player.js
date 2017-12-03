var player = {
color: "#00A",
x: 220,
y: 460,
width: 120,
height: 100,


sprite : Sprite("player"),

draw : function() {
this.sprite.draw(canvas1, this.x, this.y);
},

shoot : function() {
  var bulletPosition = this.midpoint();
  bulletPosition.y -= 60;

  if (count>6) {
    //Sound.play("shoot");
    playerBullets.push(Bullet({
      speed: 13,
      x: bulletPosition.x,
      y: bulletPosition.y,
      horizonal: 0,
    }));
    count = 0;
  }else {
    count++;
  }
},
superShoot : function() {
  if (score.bullets > 0) {
  var bulletPosition = this.midpoint();
  bulletPosition.y -= 60;

  if (count>6) {
    score.bullets --;
    playerBullets.push(Bullet({
      speed: 13,
      x: bulletPosition.x,
      y: bulletPosition.y,
      horizonal: 0,
    }));
    playerBullets.push(Bullet({
      speed: 13,
      horizonal: 7,
      x: bulletPosition.x,
      y: bulletPosition.y,
    }));
    playerBullets.push(Bullet({
      speed: 13,
      horizonal:-7,
      x: bulletPosition.x,
      y: bulletPosition.y,
    }));
    count = 0;
  }else {
    count++;
  }
}},
midpoint : function() {
  return {
    x: this.x + this.width/2,
    y: this.y + this.height/2
  };
},
explode : function() {
  this.active = false;
  // Extra Credit: Add an explosion graphic and then end the game
}


};
