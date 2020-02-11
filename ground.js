


function ground(imagename, x, y, width, height, speedx){
    this.img = new Image();
    this.img.src = "./img/" + imagename + ".png";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
}
ground.prototype.move = function(){
    //todo
    this.x += this.speedx;
    // console.log(this.x);
}
ground.prototype.draw = function(ctx){
    // console.log(this.y);
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    if(this.x < 0 - this.width){
        this.x = 1000;
    }
}
ground.prototype.collide = function(bodyb){
    if (this.x < bodyb.x + bodyb.width &&
        this.x + this.width > bodyb.x &&
        this.y < bodyb.y + bodyb.height &&
        this.y + this.height > bodyb.y) {
        return true;
     }else return false;
}