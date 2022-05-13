const cube = document.getElementById('gelatinous-cube');

let positionY = 200;
let speed = 1;

//idle for jelly
function cubeBounce () {
    if (positionY >= 360 || positionY <= 150){
        speed *= -1;
    }

    positionY += speed;

    cube.style.top = positionY.toString() + 'px';
}