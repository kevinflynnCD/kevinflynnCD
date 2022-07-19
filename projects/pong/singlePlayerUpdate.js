//update function
let music = new Audio('/projects/box-breaker/Music/theOnlyThing.mp3');

setInterval( () => {
    music.play();
    moveSPaddles();
    moveBall();
    handleScoring();
}, 20);