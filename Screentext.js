"use strict"

var chopr = new Image();
chopr.src = "./img/heli-1.png";

var screentext = {};

screentext.show = function(text, color, fntsiz, txtalign, x, y) {
    canvasContext.font = fntsiz;
    canvasContext.fillStyle = color;
    canvasContext.textAlign = txtalign;
    canvasContext.fillText(text, x, y);
};
screentext.showdata = function(txt) {
    if(txt != undefined){
       canvasContext.beginPath();
        canvasContext.strokeStyle = 'black';
        canvasContext.rect(612 ,4,88,14);
        canvasContext.fillStyle = 'black';
        canvasContext.fill();
        canvasContext.stroke();
        this.show("Score: " + txt, "yellow","bold 14px Arial", "left", 612, 16); 
    }
    
};
screentext.showpic = function(){
    // todo
}