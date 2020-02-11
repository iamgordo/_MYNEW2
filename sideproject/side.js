var canvas = undefined;
var canvasContext = undefined;

var fireball = new Image();
fireball.src = "./img/fireball.png";


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

}
function draw(){
    canvasContext.drawImage(fireball, 200, 200);
}
function gameLoop () {
    canvasContext.fillStyle = "#336699";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

