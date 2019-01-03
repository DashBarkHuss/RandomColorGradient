var c;
var ctx;
var grd;

window.onload = function () {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    grd=ctx.createLinearGradient(0,150,300,150);

};

function getRandomColor(){
    function randomRGB(){
       return Math.floor(Math.random()*256);
    };
    return  'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB(0) +')';
};

function addGradient(){
    color = getRandomColor();
    position = Math.random();
    grd.addColorStop(position, color);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 300, 300);
}