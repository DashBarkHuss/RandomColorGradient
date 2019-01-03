var c;
var ctx;
var grd;

window.onload = function () {
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    grd=ctx.createLinearGradient(0,150,300,150);

};

function getRandomColor(){
    function randomHue(){
       return Math.floor(Math.random()*361);
    };
    function randomLightness(){
        return Math.floor(Math.random()*41 + 50);
     };
    return  'hsl(' + randomHue() + ',100%,' +  + randomLightness() +'%)';
};

function addGradient(){
    color = getRandomColor();
    position = Math.random();
    grd.addColorStop(position, color);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 300, 300);
}