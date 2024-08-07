import { createAnimations } from "./animations.js"
import { creations } from "./creations.js"
import { loadAsets } from "./loading.js"

const config = {
    type: Phaser.AUTO, // webgl, canvas
    width: 256,
    height: 244,
    backgroundColor: '#049cd8',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload, // se ejecuta para precargar recursos
        create, // se ejecuta cuando el juego comienza
        update // se ejecuta en cada frame
    }
}

new Phaser.Game(config)

function preload() {
    loadAsets(this)
}

function create() {
    creations({ game: this, config })

    createAnimations(this)

    this.keys = this.input.keyboard.createCursorKeys()
}

function update() {
    if (this.keys.left.isDown) {
        this.mario.x -= 2
        this.mario.flipX = true
        this.mario.anims.play('walk', true)
    } else if (this.keys.right.isDown) {
        this.mario.x += 2
        this.mario.flipX = false
        this.mario.anims.play('walk', true)
    } else {
        this.mario.anims.play('idle', true)
    }
    if (this.keys.up.isDown && this.mario.body.touching.down) {
        this.mario.setVelocityY(-300)
    }
    this.coin.anims.play('money', true)
}

