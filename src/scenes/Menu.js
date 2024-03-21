class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        // stuff
        this.load.path = "./assets/"
        this.load.image('handle','handle.png')
        this.load.image('ring','ring.png')
        this.load.image('button2','button2.png')
        this.load.image('door','door.png')
        this.load.image('head','head.png')
        this.load.image('poster','poster.png')
        this.load.image('box','box.png')
        this.load.image('circle','circle.png')
        this.load.image('shock','shock.png')
        this.load.image('hints','hints.png')
        this.load.image('fade','fade.png')
        this.load.image('credits','credits.png')
        this.load.image('tutorial','tutorial.png')

        // load audio
        this.load.audio('deal','deal.wav')
        this.load.audio('growl','growl.wav')
        this.load.audio('hover','hover.wav')
        this.load.audio('line1','line1.wav')
        this.load.audio('line2','line2.wav')
        this.load.audio('line3','line3.wav')
        this.load.audio('loss','loss.wav')
        this.load.audio('screech','screech.wav')
        this.load.audio('theme1','theme1.wav')
        this.load.audio('thud','thud.wav')
        this.load.audio('thud2','thud2.wav')
        this.load.audio('win','win.wav')
    }

    create() {
        // also stuff
        this.gfx = this.add.graphics()

        //doorrange
        this.screenRing = new Phaser.Geom.Circle(screenX,screenY, h*2/5)
        this.boxRing = new Phaser.Geom.Circle(buttonX,boxY,h/14)
        this.doorRing = new Phaser.Geom.Circle(buttonX,doorY,h/14)
        this.postRing = new Phaser.Geom.Circle(buttonX,postY,h/14)
        this.pinRing = new Phaser.Geom.Circle(buttonX,pinY,h/14)


        this.poster = this.add.sprite(screenX,screenY-32,'poster')
        this.poster.setScale(0.5)
        
        //boxemitter
        this.boxEmitter = this.add.particles(0, 0, 'button2', {
            speed: 30,
            scale: {start: 0.3, end: 0.05},
            alpha: {start: 0.3, end: 0},
            quantity: 20,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.boxRing, quantity: 100},
            deathZone: {type: 'onEnter', source: this.boxRing},
            tint: 0xFF7766
        })

        this.boxbg = this.add.sprite(buttonX,boxY,'circle')
        this.boxbg.setScale(0.15)
        this.boxbg.setTint(0x333333)
        this.bgEmitter1 = this.add.particles(0, 0, 'ring', {
            speed: 30,
            scale: {start: 0.03, end: 0.002},
            alpha: {start: 0.3, end: 0},
            quantity: 50,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.boxRing, quantity: 100},
            tint: 0xAAAAAA,
            deathZone: {type: 'onExit', source: this.boxRing}
        })

        this.boxbutton = this.add.sprite(buttonX,boxY,'ring')
        this.boxbutton.setScale(0.15)
        this.boxbutton.setTint(0x656565)
        
        this.boxicon = this.add.sprite(buttonX,boxY,'box')
        this.boxicon.setScale(0.1)
        this.boxicon.setTint(0xFF9999)






        //dooremitter
        this.doorEmitter = this.add.particles(0, 0, 'button2', {
            speed: 30,
            scale: {start: 0.3, end: 0.05},
            alpha: {start: 0.3, end: 0},
            quantity: 20,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.doorRing, quantity: 100},
            deathZone: {type: 'onEnter', source: this.doorRing},
            tint: 0xFF7766
        })

        this.doorbg = this.add.sprite(buttonX,doorY,'circle')
        this.doorbg.setScale(0.15)
        this.doorbg.setTint(0x333333)
        this.bgEmitter2 = this.add.particles(0, 0, 'ring', {
            speed: 30,
            scale: {start: 0.03, end: 0.002},
            alpha: {start: 0.3, end: 0},
            quantity: 50,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.doorRing, quantity: 100},
            tint: 0xAAAAAA,
            deathZone: {type: 'onExit', source: this.doorRing}
        })

        this.doorbutton = this.add.sprite(buttonX,doorY,'ring')
        this.doorbutton.setScale(0.15)
        this.doorbutton.setTint(0x656565)
        
        this.dooricon = this.add.sprite(buttonX,doorY,'door')
        this.dooricon.setScale(0.11)
        this.dooricon.setTint(0xFF9999)




        //postemitter
        this.postEmitter = this.add.particles(0, 0, 'button2', {
            speed: 30,
            scale: {start: 0.3, end: 0.05},
            alpha: {start: 0.3, end: 0},
            quantity: 20,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.postRing, quantity: 100},
            deathZone: {type: 'onEnter', source: this.postRing},
            tint: 0xFF7766
        })

        this.postbg = this.add.sprite(buttonX,postY,'circle')
        this.postbg.setScale(0.15)
        this.postbg.setTint(0x333333)
        this.bgEmitter3 = this.add.particles(0, 0, 'ring', {
            speed: 30,
            scale: {start: 0.03, end: 0.002},
            alpha: {start: 0.1, end: 0},
            quantity: 50,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.postRing, quantity: 100},
            tint: 0xAAAAAA,
            deathZone: {type: 'onExit', source: this.postRing}
        })

        this.postbutton = this.add.sprite(buttonX,postY,'ring')
        this.postbutton.setScale(0.15)
        this.postbutton.setTint(0x656565)
        
        this.posticon = this.add.sprite(buttonX,postY,'poster')
        this.posticon.setScale(0.1)
        this.posticon.setTint(0xFF9999)








        //pinemitter
        this.pinEmitter = this.add.particles(0, 0, 'button2', {
            speed: 30,
            scale: {start: 0.3, end: 0.05},
            alpha: {start: 0.3, end: 0},
            quantity: 20,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.pinRing, quantity: 100},
            deathZone: {type: 'onEnter', source: this.pinRing},
            tint: 0xFF7766
        })

        this.pinbg = this.add.sprite(buttonX,pinY,'circle')
        this.pinbg.setScale(0.15)
        this.pinbg.setTint(0x333333)
        this.bgEmitter4 = this.add.particles(0, 0, 'ring', {
            speed: 30,
            scale: {start: 0.03, end: 0.002},
            alpha: {start: 0.3, end: 0},
            quantity: 50,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.pinRing, quantity: 100},
            tint: 0xAAAAAA,
            deathZone: {type: 'onExit', source: this.pinRing}
        })

        this.pinbutton = this.add.sprite(buttonX,pinY,'ring')
        this.pinbutton.setScale(0.15)
        this.pinbutton.setTint(0x656565)
        
        this.pinicon = this.add.sprite(buttonX,pinY,'head')
        this.pinicon.setScale(0.1)
        this.pinicon.setTint(0x882222)


        this.tickCount = 0


        this.hintbox = this.add.tileSprite(screenX,pinY,512,128,'hints')
        this.hintbox.setScale(0.6)
        this.hintbox.tilePositionX -= 250
        this.cover1 = this.add.sprite(screenX+(256*0.6),pinY,'fade')
        this.cover2 = this.add.sprite(screenX-(256*0.6),pinY,'fade')
        this.cover2.setAngle(180)
        //this.posticon.setTint(0xFF9999)

        this.creditson = false
        this.creditstick = 0
        this.tutorialon = false
        this.tutorialtick = 0
        this.difficulty = 0

        this.credits = null
        this.tutorial = null
        this.audiotick = 0

        this.music = this.sound.add('theme1')

        this.music.play()
        this.music.volume = 0.4
        this.music.loop = true
        this.difficultytick = 0
        this.difficultytext = null
    }
    inbounds(obj1, obj2) {
        this.theradius = 45
        //console.log(obj1.y)
        //console.log((obj2.y - this.theradius))
        //console.log((obj2.y + this.theradius))
        if (obj1.x > obj2.x - this.theradius) {
            if (obj1.x < obj2.x + this.theradius) {

                
                if (obj1.y < obj2.y + this.theradius) {

                
                    if (obj1.y > obj2.y - this.theradius) {

                        return true
                    
                
                    } 
                
                } 
            
            } 
            
        } 
        return false
    }
    update() {
        this.hintbox.tilePositionX += 1
        this.audiotick++
        if (this.audiotick > 50) {
            this.songchance = Math.random()
            if (this.songchance < 0.1) {
                this.sound.play('line1')
                this.audiotick = -300
            } else if (this.songchance < 0.2) {
                this.sound.play('line2')
                this.audiotick = -300
            } else if (this.songchance < 0.3) {
                this.sound.play('line3')
                this.audiotick = -300
            } 
        }


        if (this.tickCount < 100) {
            this.tickCount++
            this.poster.setAlpha(this.tickCount/100)
            //console.log(this.tickCount)
        } else {

            if (this.creditson) {
                this.tutorialtick += 1
                if (this.input.mousePointer.leftButtonDown() && this.tutorialtick >= 50) {
                    this.creditson = false
                    this.tickCount = 80
                    this.sound.play('thud')
                    if (this.credits != null) {
                        this.credits.destroy()
                    }
                }
            }
            else if (this.tutorialon) {
                this.tutorialtick += 1
                if (this.input.mousePointer.leftButtonDown() && this.tutorialtick >= 50) {
                    this.tutorialon = false
                    this.tickCount = 80
                    this.sound.play('thud')
                    if (this.tutorial != null) {
                        this.tutorial.destroy()
                    }
                }
            }
            else {
                this.doorEmitter.emitParticle()
            
                if (this.input.mousePointer.leftButtonDown() && this.inbounds(this.input.mousePointer.position, this.doorRing)) {
                    this.sound.play('thud')
                    
                    this.music.stop()
                    if (this.difficulty == 0) {
                        this.scene.start('labyrinthScene')
                    } else {
                        this.scene.start('easyLabyrinthScene')
                    }
                    //add other difficulty, the visible timers version
                }
    
                else if (this.inbounds(this.input.mousePointer.position, this.postRing)) {
                    this.postEmitter.emitParticle()
                    if (this.input.mousePointer.leftButtonDown()) {
                        //open tutorial
                        this.sound.play('thud')
                        this.tutorialon = true
                        this.tutorialtick = 0
                        this.tutorial = this.add.sprite(screenX,screenY,'tutorial')
                        this.tutorial.setScale(0.7)
                        
                    }
                }
    
                else if (this.inbounds(this.input.mousePointer.position, this.boxRing)) {
                    this.boxEmitter.emitParticle()
                    this.difficultytick++
                    if (this.input.mousePointer.leftButtonDown() && this.difficultytick > 20) {
                        //toggle difficulty
                        if (this.difficulty == 0) {
                            this.difficulty = 1
                            this.difficultytick = 0
                            this.difficultytext = this.add.text(screenX - 70, boxY - 30, 'EASY MODE')
                            
                            this.difficultytext.setFontSize(30)
                        } else {
                            this.difficulty = 0
                            this.difficultytick = 0
                            this.difficultytext.destroy()
                        }
                        this.sound.play('thud')
                    }
                }
    
                else if (this.inbounds(this.input.mousePointer.position, this.pinRing)) {
                    this.pinEmitter.emitParticle()
                    if (this.input.mousePointer.leftButtonDown()) {
                        //open credits
                        this.sound.play('thud')
                        this.creditson = true
                        this.tutorialtick = 0
                        this.credits = this.add.sprite(screenX,screenY,'credits')
                        this.credits.setScale(0.7)
                    }
                }
            }
            
        }
        //repeating stuff
        //this.boxEmitter.emitParticle()
        
        //this.postEmitter.emitParticle()
        //this.pinEmitter.emitParticle()
        
        this.bgEmitter1.emitParticle()
        this.bgEmitter2.emitParticle()
        this.bgEmitter3.emitParticle()
        this.bgEmitter4.emitParticle()

        
    }
}