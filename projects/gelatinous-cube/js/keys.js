var upArrow = false;

//detect jump
window.addEventListener('keydown', function (e) {
    if (e.which === 38) {
        upArrow = true;
    }
});

//detect release
window.addEventListener('keyup', function (e) {
    if (e.which === 38) {
        upArrow = false;
    }
});