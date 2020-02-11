var canvas = undefined;
var canvasContext = undefined;

var fireball = new Image();
fireball.src = "./img/fireball.png";
var ball = new newimage(fireball, 800, 200, 75, 20, -1, 0);


function start () {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");


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
}
function draw(){
    // canvasContext.drawImage(fireball, 200, 200, 75, 20);
    canvasContext.drawImage(ball.img, ball.x, ball.y, ball.width, ball.height);

}
function gameLoop () {
    canvasContext.fillStyle = "#336699";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
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

