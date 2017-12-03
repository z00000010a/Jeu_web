var score = {
  score:0,
  life :10,
  bullets:10,

  draw : function(){
    canvas1.fillStyle = "white";
    canvas1.font = "20px Verdana";
    canvas1.fillText("score:  "+this.score,40,60);
    canvas1.fillText("life:  "+this.life,40,90);
    canvas1.fillText("Super bullets:  "+this.bullets,40,30);
  }

}
