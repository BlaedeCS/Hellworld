// Game: Hellworld
// Name: Blaede Court-Suzuki
// Date: 03/19/2024

// Components
// PARTICLE EFFECTS, TWEENS, TIMERS, TILESPRITE, TEXT OBJECTS
// because it's for training reasons, I think the font is fine

// Brief description (mostly for myself):
// --Game is a rough recreation of "Hellworld" from that Hellraiser sequel
// --Since the game used 3D visuals and effects, I used 2d pixel art and tweens to replicate the overall feel
// --The gameplay was also barely shown, but the general idea is you encounter 'scenarios' in the main window
// --From there, you can click on glowing objects in the main window, or any buttons to the side that light up
// --The idea is you're in a cosmic horror-style 'labyrinth beyond comprehension', so there are no reliable constants
// --In gameplay form, this means general concepts like "changing locations" or "talking" get buttons when valid responses
// --However, they do not apply to every scenario, and you do not know what the exact interpretation of one's function is
// --Exiting the labyrinth can only be done by finding a puzzle box or restarting the game (poster button)
// --However, there are no timers unless you encounter a 'monster' and are actively chased
// --In such a scenario, you need to count the seconds in your head, and find a way to "avoid" them or a puzzle box "exit"
// --Since you're being chased in this context, though, you have to solve the puzzle right there in time to escape

// --Something on the title screen will cycle through what the buttons to the right do out-of-game
// --The door is the 'enter' / 'exit' button for playing the game (exit only works without a timer, it's conditional and automatic otherwise)
// --The puzzle box out-of-game is for cycling game modes
// --In-game it's either to interact with a puzzle in a scenario or use a box for something other than escape. In theory.
// --The poster out-of-game is for a tutorial, and in-game it's to restart
// --The head button out-of-game is for credits, and in-game (in theory) for communicating with monsters.

'use strict'

// define game object
let config = {
    parent: 'phaser-game',
    type: Phaser.WEBGL,
    pixelArt: true,
    width: 640,
    height: 480,
    scene: [ Menu, Lab, LabEasy, Invite ]
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
