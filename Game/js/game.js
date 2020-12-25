var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bg = new Image();
var player = new Image();
var platform = new Image();
var block = new Image();

// Картинки
bg.src = "img/bg.png";
player.src = "img/Jump.png";
platform.src = "img/Platform.png";
block.src = "img/Block.png";

//Позиции игрока
var xPos = 190;
var yPos = 490;
var grav = 2;     

//Прыжок
document.addEventListener("keydown", jump);

function jump() {
    yPos -= 200;
}

//Блок
var block_pz = [];

block_pz[0] = {
    x : 359,
    y : 400
}

function draw() {
    ctx.drawImage(bg, 0, 0);

    ctx.drawImage(player, xPos, yPos);
  
    for(var i = 0; i < block.length; i++) {
      ctx.drawImage(block, block_pz[i].x, block_pz[i].y);
      
      block_pz[i].x--;

      if(block_pz[i].x == 125) {
          block_pz.push({
              x : cvs.width
          });
        }
    }
    
    ctx.drawImage(platform, 0, 610);

    yPos += grav;
    requestAnimationFrame(draw);
}

block.onload = draw;