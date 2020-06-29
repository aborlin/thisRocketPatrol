
//create game configuration object
console.log("code is being read");
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

// create main game object
let game = new Phaser.Game(config);
// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000    
}
let keyF, keyLEFT, keyRIGHT;
let pointValue;
console.log("hi");