
/*
 * implimented mods:
 * Alternating 2-player mode: 50 pts
 * Mouse Control: 25 pts
 * control the rocket after firing: 10 pts
 * new title screen: 15 pts
 * 
 */
//create game configuration object
console.log("code is being read");
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play, Play01, Play02],
};

// create main game object
let game = new Phaser.Game(config);
// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}
let keyF, keyLEFT, keyRIGHT, key2, mouseclick;
let score1 = 0;
let score2 = 0;
let hScore = 0;
let pointValue;
console.log("hi");