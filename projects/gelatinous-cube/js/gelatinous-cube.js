const cube = document.getElementById('gelatinous-cube');

let cubePositionY = 200;
let cubeSpeed = 1;

//idle for jelly
function cubeBounce () {
    if (cubePositionY >= 520 || cubePositionY <= 150){
        cubeSpeed *= -1;
    }

    cubePositionY += cubeSpeed;

    cube.style.top = cubePositionY.toString() + 'px';
}