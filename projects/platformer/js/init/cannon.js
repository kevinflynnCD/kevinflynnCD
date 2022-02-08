(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
var rightMax = 500;
var topMax = 0;
function spawnCannons () {
    createCannon("top", topMax + 100);
    createCannon("top", topMax + 150);
    createCannon("top", topMax + 200);
    createCannon("top", topMax + 250);
    createCannon("top", topMax + 300);
    createCannon("top", topMax + 350);
    createCannon("top", topMax + 400);
    createCannon("top", topMax + 450);
    createCannon("top", topMax + 500);
    createCannon("top", topMax + 550);
    createCannon("top", topMax + 600);
    createCannon("top", topMax + 650);
    createCannon("top", topMax + 700);
}
        
spawnCannons();
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
