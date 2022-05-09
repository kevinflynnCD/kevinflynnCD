//update function
let isMultiplayer;
let isGameModeSlected = false;

const play1 = document.getElementById("sing");
const play2 = document.getElementById('mult');

play1.addEventListener('click', () => {
    isMultiplayer = true;
    isGameModeSlected = true;
});

play2.addEventListener('click', () => {
    isMultiplayer = false;
    isGameModeSlected = true;
});


setInterval( () => {

    if(isGameModeSlected){

        if (isMultiplayer) {
            moveMPaddles();
        } else {
            moveSPaddles();
        }
        moveBall();
        handleScoring();
    }

}, 20);