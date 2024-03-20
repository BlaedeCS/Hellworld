class Lab extends Phaser.Scene {
    constructor() {
        super('labyrinthScene')
    }

    preload() {
        // stuff
        this.load.path = "./assets/"
        this.load.image('monster','monster.png')
        this.load.image('button1','button1.png')
        this.load.image('button3','button3.png')
        this.load.image('side1','side1.png')
        this.load.image('side2','side2.png')
        this.load.image('side3','side3.png')
        this.load.image('invite1','invite1.png')
        this.load.image('handle2','handle2.png')
        this.load.image('handle3','handle3.png')
    }

    create() {
        // also stuff
        this.gfx = this.add.graphics()

        //doorrange
        this.screenRing = new Phaser.Geom.Circle(screenX,screenY, h*2/5)
        this.smallRing = new Phaser.Geom.Circle(screenX,screenY, h*2/15)
        
        this.boxRing = new Phaser.Geom.Circle(buttonX,boxY,h/14)
        this.doorRing = new Phaser.Geom.Circle(buttonX,doorY,h/14)
        this.postRing = new Phaser.Geom.Circle(buttonX,postY,h/14)
        this.pinRing = new Phaser.Geom.Circle(buttonX,pinY,h/14)


        //hellscape
        this.hellEmitter = this.add.particles(0, 0, 'button2', {
            speed: 30,
            scale: {start: 0.3, end: 0.05},
            alpha: {start: 0.3, end: 0},
            quantity: 200,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.screenRing, quantity: 800},
            deathZone: {type: 'onEnter', source: this.screenRing},
            tint: 0xFF7766
        })

        this.hellbg = this.add.sprite(screenX,screenY,'circle')
        this.hellbg.setScale(0.65)
        this.hellbg.setTint(0x333333)
        this.bgEmitter = this.add.particles(0, 0, 'ring', {
            speed: 30,
            scale: {start: 0.4, end: 0.002},
            alpha: {start: 0.1, end: 0},
            quantity: 30,
            lifespan: 1500,
            frequency: -1,
            emitZone: {type: 'edge', source: this.smallRing, quantity: 30},
            tint: 0xAAAAAA,
            deathZone: {type: 'onExit', source: this.smallRing}
        })

        this.hellbutton = this.add.sprite(screenX,screenY,'ring')
        this.hellbutton.setScale(0.65)
        this.hellbutton.setTint(0x656565)
        
        
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
        this.hasMonster = 0
        this.monsterTimer = 0
        this.monsterObstacles = 0
        this.picking = true
        this.canclick = true
        this.door = null
        this.handle = null
        this.invitation = null
        this.pb1 = null
        this.pb2 = null
        this.pb3 = null
        
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

    inbounds2(obj1, x, y, z) {
        this.theradius = z
        //console.log(obj1.x)
        //console.log(obj1.y)
        
        if (obj1.x > x - this.theradius) {
            if (obj1.x < x + this.theradius) {

                
                if (obj1.y < y + this.theradius) {

                
                    if (obj1.y > y - this.theradius) {

                        return true
                    
                
                    } 
                
                } 
            
            } 
            
        } 
        return false
    }
    update() {
        this.hellEmitter.emitParticle()
        this.bgEmitter.emitParticle()

        if (this.tickCount < 100) {
            this.tickCount++
            //this.poster.setAlpha(this.tickCount/100)
            //console.log(this.tickCount)
        } else if (this.picking) {
            this.picking = false
            //this.canclick = false
            //Spawn one of three events: monster event (one chance), door event, or puzzle event
            //If you get puzzle event and don't have a monster event, you go to Invitation event
            //If you get monster event, you have a 20-second timer to NOT die (or be sent to menu)
            //If you get puzzle event in monster event, you gotta solve the box, for Invitation scene
            this.scenario = Math.random()

            if (this.scenario < 0.5 && this.hasMonster == 0) {
                //Monster scenario!
                console.log('monster time!')
                this.monsterObstacles = 0
                this.monster = this.add.sprite(screenX,screenY,'monster')
                this.monster.setScale(0.001)
                this.tweens.add({
                    targets: this.monster,
                    scale: {from: 0.001, to: 0.5},
                    angle: {from: 0, to: 720},
                    ease: 'Sine.easeIn',
                    duration: 1000,
                    repeat: 0,
                    yoyo: true,
                    hold: 2000
                })
                this.hasMonster++
                this.clock = this.time.delayedCall(20000, () => {
                    if (this.hasMonster > 0) {
                        //GAME OVER
                        this.scene.start('menuScene')
                    }
                }, null, this)
                this.tickCount = -300
                this.picking = true
                //this.canclick = true
            } else if (this.monsterObstacles > 0 && this.scenario < 0.9) {
                //Box in either monster attack or peaceful!
                console.log('box time!')
                if (this.hasMonster == 0) {
                    //not in crisis, insta-win, prompt box escape
                    //this.canclick = true
                    this.box = this.add.sprite(screenX,screenY,'box')
                    this.box.setScale(0.001)
                    this.tweens.add({
                        targets: this.box,
                        scale: {from: 0.001, to: 0.5},
                        angle: {from: 0, to: 720},
                        ease: 'Sine.easeIn',
                        duration: 1000,
                        repeat: 0
                    })
                    this.clock = this.time.delayedCall(1000, () => {
                        //this.picking = true
                        this.tweens.add({
                            targets: this.box,
                            scale: {from: 0.5, to: 1.5},
                            angle: {from: 0, to: 720},
                            alpha: {from: 1, to: 0},
                            ease: 'Sine.easeOut',
                            duration: 1000,
                            repeat: 0
                        })
                        console.log("it's time dude")
                        this.clock = this.time.delayedCall(100, () => {
                            //Inv message scenario
                            this.invitation = this.add.sprite(screenX,screenY,'invite1')
                            this.box.setScale(0.001)
                            this.tweens.add({
                                targets: this.invitation,
                                scale: {from: 0.001, to: 0.65},
                                angle: {from: 0, to: 720},
                                ease: 'Sine.easeIn',
                                duration: 1000,
                                repeat: 0
                            })
                            
                        }, null, this)
                    }, null, this)
                } else {
                    //puzzle scenario
                    this.puzzle = this.add.sprite(screenX,screenY,'side1')
                    this.puzzle.setScale(0.001)
                    this.puzzle.setTint(0x999999)
                    this.tweens.add({
                        targets: this.puzzle,
                        scale: {from: 0.001, to: 0.3},
                        angle: {from: 0, to: 720},
                        ease: 'Sine.easeIn',
                        duration: 1000,
                        repeat: 0
                    })

                    this.handleglow = this.add.sprite(screenX,screenY,'button1')
                    this.handleglow.setScale(0.001)
                    
                    this.pb1 = this.add.sprite(screenX,screenY,'button1')
                    this.pb1.setScale(0.001)
                    this.pb1.setTint(0x999999)

                    this.tweens.add({
                        targets: this.pb1,
                        scale: {from: 0.001, to: 0.3},
                        angle: {from: 0, to: 720},
                        ease: 'Sine.easeIn',
                        duration: 1000,
                        repeat: 0
                    })

                    this.tweens.add({
                        targets: this.handleglow,
                        scale: {from: 0.001, to: 0.4},
                        angle: {from: 0, to: 720},
                        ease: 'Sine.easeIn',
                        duration: 1000,
                        repeat: 0
                    })
                    this.tweens.add({
                        targets: this.handleglow,
                        alpha: {from: 0, to: 1},
                        ease: 'Sine.easeInOut',
                        duration: 300,
                        repeat: -1,
                        yoyo: true
                    })
                }
                
            } else {
                //Door scenario!
                console.log('open time!')
                this.door = this.add.sprite(screenX,screenY,'door')
                this.door.setScale(0.001)
                this.tweens.add({
                    targets: this.door,
                    scale: {from: 0.001, to: 0.5},
                    angle: {from: 0, to: 720},
                    ease: 'Sine.easeIn',
                    duration: 1000,
                    repeat: 0
                })

                this.handleglow = this.add.sprite(screenX,screenY,'handle3')
                this.handleglow.setScale(0.001)
                this.handle = this.add.sprite(screenX,screenY,'handle2')
                this.handle.setScale(0.001)
                
                this.tweens.add({
                    targets: [this.handle, this.handleglow],
                    scale: {from: 0.001, to: 0.5},
                    angle: {from: 0, to: 720},
                    ease: 'Sine.easeIn',
                    duration: 1000,
                    repeat: 0
                })
                this.tweens.add({
                    targets: this.handleglow,
                    alpha: {from: 0, to: 1},
                    ease: 'Sine.easeInOut',
                    duration: 300,
                    repeat: -1,
                    yoyo: true
                })
            }

            
            
        }


        //console.log(this.door)
        if (this.picking == false && this.door) {
            
            //console.log("this is the door!!!")
            
            if (this.canclick && this.input.mousePointer.leftButtonDown() && this.inbounds2(this.input.mousePointer.position, 280,268,15)) {
                this.tickCount = 0
                this.picking = true
                this.canclick = false
                this.monsterObstacles++
                this.tweens.killAll()
                this.tweens.add({
                    targets: [this.handle, this.handleglow, this.door],
                    scale: {from: 0.5, to: 0.001},
                    angle: {from: 0, to: -720},
                    ease: 'Sine.easeOut',
                    duration: 1000,
                    repeat: 0
                })
                this.clock = this.time.delayedCall(1000, () => {
                        //this.picking = true
                        this.door.destroy()
                        console.log("it's time dude")
                        this.canclick = true
                }, null, this)
            }
        }

        if (this.picking == false && this.pb1) {
            //console.log("this is the door!!!")
            
            if (this.canclick && this.input.mousePointer.leftButtonDown() && this.inbounds(this.input.mousePointer.position, this.hellbg)) {
                //this.tickCount = 0
                //this.picking = true
                this.canclick = false
                this.tweens.killAll()
                this.tweens.add({
                    targets: [this.pb1, this.handleglow, this.puzzle],
                    scale: {from: 0.3, to: 0.001},
                    angle: {from: 0, to: -720},
                    ease: 'Sine.easeOut',
                    duration: 1000,
                    repeat: 0
                })
                this.clock = this.time.delayedCall(1000, () => {
                        //this.picking = true
                        this.pb1.destroy()
                        this.puzzle.destroy()
                        this.handleglow.destroy()
                        this.pb1 = null
                        this.puzzle = null
                        this.handleglow = null
                        console.log('first -puzzle cleared')
                        console.log("it's time dude")
                        this.puzzle = this.add.sprite(screenX,screenY,'side2')
                        this.puzzle.setScale(0.001)
                        this.puzzle.setTint(0x999999)
                        this.tweens.add({
                            targets: this.puzzle,
                            scale: {from: 0.001, to: 0.3},
                            angle: {from: 0, to: 720},
                            ease: 'Sine.easeIn',
                            duration: 1000,
                            repeat: 0
                        })

                        this.handleglow = this.add.sprite(screenX,screenY,'button2')
                        this.handleglow.setScale(0.001)
                        
                        this.pb2 = this.add.sprite(screenX,screenY,'button2')
                        this.pb2.setScale(0.001)
                        this.pb2.setTint(0x999999)

                        this.tweens.add({
                            targets: this.pb2,
                            scale: {from: 0.001, to: 0.3},
                            angle: {from: 0, to: 720},
                            ease: 'Sine.easeIn',
                            duration: 1000,
                            repeat: 0
                        })

                        this.tweens.add({
                            targets: this.handleglow,
                            scale: {from: 0.001, to: 0.4},
                            angle: {from: 0, to: 720},
                            ease: 'Sine.easeIn',
                            duration: 1000,
                            repeat: 0
                        })
                        this.tweens.add({
                            targets: this.handleglow,
                            alpha: {from: 0, to: 1},
                            ease: 'Sine.easeInOut',
                            duration: 300,
                            repeat: -1,
                            yoyo: true
                        })
                        this.canclick = true
                }, null, this)
            }
        }

        if (this.picking == false && this.pb2) {
            //console.log("this is the door!!!")
            
            if (this.canclick && this.input.mousePointer.leftButtonDown() && this.inbounds(this.input.mousePointer.position, this.hellbg)) {
                //this.tickCount = 0
                //this.picking = true
                this.tweens.killAll()
                this.canclick = false
                this.tweens.add({
                    targets: [this.pb2, this.handleglow, this.puzzle],
                    scale: {from: 0.3, to: 0.001},
                    angle: {from: 0, to: -720},
                    ease: 'Sine.easeOut',
                    duration: 1000,
                    repeat: 0
                })
                this.clock = this.time.delayedCall(1000, () => {
                        //this.picking = true
                        this.pb2.destroy()
                        this.puzzle.destroy()
                        this.handleglow.destroy()
                        this.pb2 = null
                        this.puzzle = null
                        this.handleglow = null
                        console.log('second -puzzle cleared')
                        console.log("it's time dude")
                        this.puzzle = this.add.sprite(screenX,screenY,'side3')
                        this.puzzle.setScale(0.001)
                        this.puzzle.setTint(0x999999)
                        this.tweens.add({
                            targets: this.puzzle,
                            scale: {from: 0.001, to: 0.3},
                            angle: {from: 0, to: 720},
                            ease: 'Sine.easeIn',
                            duration: 1000,
                            repeat: 0
                        })

                        this.handleglow = this.add.sprite(screenX,screenY,'button3')
                        this.handleglow.setScale(0.001)
                        
                        this.pb3 = this.add.sprite(screenX,screenY,'button3')
                        this.pb3.setScale(0.001)
                        this.pb3.setTint(0x999999)

                        this.tweens.add({
                            targets: this.pb3,
                            scale: {from: 0.001, to: 0.3},
                            angle: {from: 0, to: 720},
                            ease: 'Sine.easeIn',
                            duration: 1000,
                            repeat: 0
                        })

                        this.tweens.add({
                            targets: this.handleglow,
                            scale: {from: 0.001, to: 0.4},
                            angle: {from: 0, to: 720},
                            ease: 'Sine.easeIn',
                            duration: 1000,
                            repeat: 0
                        })
                        this.tweens.add({
                            targets: this.handleglow,
                            alpha: {from: 0, to: 1},
                            ease: 'Sine.easeInOut',
                            duration: 300,
                            repeat: -1,
                            yoyo: true
                        })
                        this.canclick = true
                }, null, this)
            }
        }

        if (this.canclick && this.picking == false && this.pb3) {
            //console.log("this is the door!!!")
            
            if (this.input.mousePointer.leftButtonDown() && this.inbounds(this.input.mousePointer.position, this.hellbg)) {
                //this.tickCount = 0
                //this.picking = true
                this.canclick = false
                this.tweens.killAll()
                this.scene.start('inviteScene')
            }
        }

        if (this.picking == false && this.invitation) {
            //console.log("this is the door!!!")
            this.doorEmitter.emitParticle()
            if (this.input.mousePointer.leftButtonDown() && this.inbounds(this.input.mousePointer.position, this.doorRing)) {
                this.invitation.destroy()
                this.scene.start('inviteScene')
                
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