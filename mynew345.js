var canvas = undefined;
var canvasContext = undefined;

var engine = Matter.Engine.create();
var player;
let bullets = [];
let enemies = [];
let biplanes = [];
var oneenemy, twoenemy, threeenemy;
var ground1, ground2, ground3, bullet;
var screenarea;
let wave = 1;
let state = "play";

var aslug = new Image();
aslug.src = ("./img/bullet.png");
var images = {
    biplane: new Image(),
}

function start () {
    images.biplane.src = ("./img/Biplane.png");

    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");
    screentext.show("Click to start!!", "#ff9900", "bold 60px Tahoma", "center", canvas.width / 2, canvas.height / 2);
    screentext.show("Wave: " + wave, "#ffff00", "bold 40px Tahoma", "center", canvas.width / 2, canvas.height / 2 + 100);
    screenarea =document.getElementById("gameArea");


    chopper = new gamepiece("", 300, 150, 104, 33, .08, .08);
    chopper.addimage("heli-1a");

    ground1 = new ground("mountain", 900, 430, 498, 163, -0.8);
    ground2 = new ground("mountain", 1500, 460, 498, 163, -0.8);
    ground3 = new ground("mountain", 1900, 420, 498, 163, -0.8);

    if(wave === 2){
        oneenemy = new enemy("fireball", 300, 200, 66, 18, -6, 0);
        twoenemy = new enemy("fireball", 1000, 100, 66, 18, -6, 0);
        threeenemy = new enemy("fireball", 1700, 300, 66, 18, -6, 0);
    }
    if(wave === 1){
        for(let i = 0; i < 5; i++){
            let thisplane = new biplane(images, 800 + i * 200, Math.random()*400 + 50, 73, 37, -5, 0);
        }
    }
    screenarea.addEventListener('click', init);
}
function init(e){
    screenarea.removeEventListener('click', init);
    chopper.startkeyboard();
    gameLoop();
}
document.addEventListener( 'DOMContentLoaded', start);
// cant do inertia, head swimming
function update () {
    // robot.checkborder();
    for(let i = 0; i < biplanes.length; i++){
        let thisbiplane = biplanes[i];
        if(thisbiplane.x < 0 - thisbiplane.width){
            thisbiplane.x = 1200;
            thisbiplane.y = Math.random()*400;
        }
        thisbiplane.x += thisbiplane.speedx;
        thisbiplane.y += thisbiplane.speedy;
        for(let j = 0; j < bullets.length; j++){
            let thisslug = bullets[j];
            if(checkCollision(thisbiplane, thisslug)){
                // console.log("hit " + i);
                bullets.splice(j, 1);
                // need to 
                biplanes.splice(i, 1);
            }
        }
    }
    for(let i=0; i < bullets.length; i++){
        bullets[i].x += bullets[i].speedx;
        bullets[i].y += bullets[i].speedy;
        if(bullets[i].x > canvas.width + bullets[i].width)bullets.splice(i, 1);
    }
    if(wave === 2){
        oneenemy.update();
        twoenemy.update();
    }
    ground1.move();
    ground2.move();
    ground3.move();
    chopper.checkborder();
    // if(chopper.collision(oneenemy))console.log("HIT");
    chopper.fly();
}
function draw () {
    ground1.draw(canvasContext);
    ground2.draw(canvasContext);
    ground3.draw(canvasContext);
    if(wave === 2){
        oneenemy.draw(canvasContext);
        twoenemy.draw(canvasContext);
    }
    
    chopper.draw(canvasContext);
    for(let i = 0; i < bullets.length; i++){
        canvasContext.drawImage(aslug, bullets[i].x, bullets[i].y);
    }
    for(let i = 0; i < biplanes.length; i++){
        canvasContext.drawImage(images.biplane, biplanes[i].x, biplanes[i].y, biplanes[i].width, biplanes[i].height);
    }
    
}
function gameLoop () {
    canvasContext.fillStyle = "#336699";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    update();
    draw();
    if(state === "play")requestAnimationFrame(gameLoop);
}
// set up firing timer
function slug(img, x, y, width, height, speedx, speedy){
    let thisslug = {
        img: img,
        x: x,
        y: y,
        width: width,
        height: height,
        speedx: speedx,
        speedy: speedy,
    }
    bullets.push(thisslug);
}
function checkCollision(bodya, bodyb){
    if (bodya.x < bodyb.x + bodyb.width &&
        bodya.x + bodya.width > bodyb.x &&
        bodya.y < bodyb.y + bodyb.height &&
        bodya.y + bodya.height > bodyb.y) {
        return true;
     }else return false;
}
function biplane(img, x, y, width, height, speedx, speedy){
    let thisplane = {
        img: img,
        x: x,
        y: y,
        width: width,
        height: height,
        speedx: speedx,
        speedy: speedy,
    }
    biplanes.push(thisplane);
}