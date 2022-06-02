const johnCena = document.getElementById('player')

let positionX = 610;
let positionY = 0;
let speedX = 1;
let speedY = 1;
let counter = 0;
let flip = 1;

johnCena.style.top = positionX.toString() + 'px';

//idle for john
function idleJohn () {
    counter ++;
    if (counter % 7 === 0) {
        flip *= -1;
        johnCena.style.transform = `scaleX(${flip})`;
    } 
}

//jump for john
function johnJump () {
    if (upArrow) {
        positionX ++;
        johnCena.style.top = positionX.toString() + 'px';
    }
}