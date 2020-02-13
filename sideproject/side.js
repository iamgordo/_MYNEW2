var canvas = undefined;
var canvasContext = undefined;

var fireball = new Image();
fireball.src = "./img/fireball.png";
var ball = new newimage(fireball, 800, 200, 75, 20, -1, 0);
var count = 0;

function start () {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.font = "30px Arial";
    ctx.strokeText("Hello World",10,50);

    screenarea =document.getElementById("gameArea");
    screenarea.addEventListener('click', init);
}
function init(e){
    screenarea.removeEventListener('click', init);
    gameLoop();
}
document.addEventListener( 'DOMContentLoaded', start);
// cant do inertia, head swimming
function update () {
    ball.x += ball.speedx;
    ball.y += ball.speedy;
    count += 2;
}
function draw(){
    // ctx.drawImage(fireball, 200, 200, 75, 20);
    ctx.save();
        // 112 x 36
        ctx.translate(200, 200); // actual x and y
        ctx.translate(112 / 2,36 / 2);
        ctx.rotate(count * Math.PI / 180);
        ctx.drawImage(fireball, -112 / 2, -36 / 2,112, 36);
        //large asteroid
        ctx.restore();
    // ctx.drawImage(ball.img, ball.x, ball.y, ball.width, ball.height);

}
function gameLoop () {
    ctx.fillStyle = "#336699";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    requestAnimationFrame(gameLoop);
}
function newimage(img, x, y, width, height, speedx, speedy){
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedx = speedx;
    this.speedy = speedy;
}

