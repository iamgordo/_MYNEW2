
"use strict"

// need to produce mechanism that changes graphix and behavior due to wave change
function enemy(imagename, x, y, width, height, speedx, speedy){
    this.img = new Image();
    this.img.src = "./img/" + imagename + ".png";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
    this.velx = 0;
    this.vely = 0;
}
enemy.prototype.draw = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }    
enemy.prototype.update = function(){
        if(this.x > -56){
            this.x += this.speedx;
        }else{
            wavecount += 1;
            console.log(wavecount);
            this.x = 850;
            this.y = Math.random()*470 + 20;
            if(wavecount > 20){
                
                console.log("wave 3");
                wavecount = 0;
            }
        }
        this.y += this.speedy;
    }
enemy.prototype.isColliding = function(bodyb){
    //todo use above iterations to send for iscolliding?
    // what if chopper or projectile was sent here then sent to collision?
    if (this.x < bodyb.x + bodyb.width &&
        this.x + this.width > bodyb.x &&
        this.y < bodyb.y + bodyb.height &&
        this.y + this.height > bodyb.y) {
        return true;
     }else return false;
}
enemy.dialogue = function(){
    let gameScreen = document.getElementById('gameArea');
    let gameOver = document.getElementById('gameDialogue');
    gameScreen.style.display = "none";
    gameOver.style.display = "block";

    document.removeEventListener('keydown', function(e) {
        keys[e.which] = true;
        // e.preventDefault();
    });
    document.removeEventListener('keyup', function(e) {
        keys[e.which] = false;
    });
    // setTimeout(endgame, 4000);
}
function endgame(){
    engine.events = {}
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    location.reload();
    start();
}
