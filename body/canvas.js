
var FPS = 30;
var delay = 0;

setInterval(function() {
  if (score.life>0) {
    update();
    draw();
    drawBg();
  }else {
    canvas1.fillStyle = "green";
    canvas1.font = "40px Verdana";
    canvas1.fillText(" GAMEOVER ",w=CANVAS_WIDTH/2-100,h=CANVAS_HEIGHT/2);
  }
}, 1000/FPS);



    function update() {
      if (keydown.left) {
      player.x -= 5;
    }

    if (keydown.space) {
    player.shoot();
   }
   if (keydown.c) {
   player.superShoot();
  }

    if (keydown.right) {
      player.x += 5;
    }
    player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);

    playerBullets.forEach(function(bullet) {
      bullet.update();
    });
    enemyBullets.forEach(function(EnemyBullet) {
      EnemyBullet.update();
    });

    playerBullets = playerBullets.filter(function(bullet) {
    return bullet.active;
  });
  enemyBullets = enemyBullets.filter(function(EnemyBullet) {
  return EnemyBullet.active;
});

  enemies.forEach(function(enemy) {
  enemy.update();
  enemy.shoot();
});

enemies = enemies.filter(function(enemy) {
  return enemy.active;
});

if(Math.random() < 0.1) {
  if(delay>3) {
  enemies.push(Enemy());
  delay = 0;
}else {
  delay++;
}
}
handleCollisions();

   }

  function draw() {
    canvas1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      player.draw();
      score.draw();
      playerBullets.forEach(function(bullet) {
        bullet.draw();
});
enemies.forEach(function(enemy) {
    enemy.draw();
  });
  enemyBullets.forEach(function(enemyBullet) {
    enemyBullet.draw();
});
  playerBullets.forEach(function(bullet) {
  bullet.draw();
});
  }

  function collides(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
  }
  function handleCollisions() {
    playerBullets.forEach(function(bullet) {
      enemies.forEach(function(enemy) {
        if (collides(bullet, enemy)) {
          Sound.play("shoot");
          enemy.explode();
          bullet.active = false;
          score.score ++;
        }
      });
    });
    playerBullets.forEach(function(bullet) {
      enemyBullets.forEach(function(enemyBullet) {
        if (collides(bullet, enemyBullet)) {
          bullet.active = false;
          enemyBullet.active = false;
        }
      });
    });
    enemyBullets.forEach(function(enemyBullet) {
        if (collides(player, enemyBullet)) {
          Sound.play("explosion");
          enemyBullet.active = false;
          score.life --;
        }
      });
    enemies.forEach(function(enemy) {
      if (collides(enemy, player)) {
        enemy.explode();
        player.explode();
        score.life --;
      }
    });
  }
