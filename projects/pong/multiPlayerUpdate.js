//update function
let music = new Audio('/projects/box-breaker/Music/theOnlyThing.mp3');
music.play();
setInterval( () => {
    moveMPaddles();
    moveBall();
    handleScoring();
}, 20);