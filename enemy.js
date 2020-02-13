
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
        // ctx.save();
        // ctx.translate(this.x, this.y); // actual x and y
        // ctx.translate(this.width / 2,this.height / 2);
        // ctx.rotate(Math.PI / 180);
        // ctx.drawImage(this.img, -this.width / 2, -this.height / 2,this.width, this.height);
        // //large asteroid
        // ctx.restore();
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }    
enemy.prototype.update = function(){
        if(this.x > -this.width){
            this.x += this.speedx;
        }else{
            wavecount += 1;
            // console.log(wavecount);
            this.x = 850;
            this.y = Math.random()*470 + 20;
            if(wavecount > 20){

            if(wave === 2) {
                wave += 1;
                wavechange = true;
                // oneenemy = undefined;
            }
            if(wavechange){
                screentext.show("Wave: " + wave, "#ffff00", "bold 30px Tahoma", "center", canvas.width / 2, canvas.height / 2 - 200);
                setTimeout(timesup, 2000);
            }
                // console.log("wave: " + wave);
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
     }else {
         return false;
        }
    }
