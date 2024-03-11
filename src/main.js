// Game: Hellworld
// Name: Blaede Court-Suzuki
// Date: 03/11/2024

'use strict'

// define game object
let config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    pixelArt: true,
    width: 640,
    height: 480,
    scene: [ Menu, Lab, Invite ]
}

const game = new Phaser.Game(config)

const screenX = game.config.width * 25.5 / 72
const screenY = game.config.height / 2
const w = game.config.width
const h = game.config.height

const buttonX = game.config.width * 4/5
const boxY = game.config.height * 1/8
const doorY = game.config.height * 3/8 
const postY = game.config.height * 5/8
const pinY = game.config.height * 7/8
