class Player {
    constructor(game, gameSize) {
        this.game = game
        console.log(this.game)
        this.center = { x: gameSize.x / 2, y: gameSize.y / 2 } // This will be updated as keys are pressed
        console.log(this.center)
        this.size = { x: 15, y: 15 } // Constant dependent upon character type: base character can be 15x15. Warrior 20x20, Mage/Priest base
        
        this.keyboarder = new Keyboarder()
        this.color = colors.player
        window.playerPosition = this.center
    }

    attack() {
        // This will create a rect in at the position the player is aiming. 
        // Because size is at 15x15, the rect will be 20 width, 10 height when swung down and up, 
        // and 10 width and 20 height when swung left or right.
    }

    aim(direction) {
        // This will determine the direction that the player is facing.
        // This is used in tandem with attack()
    }

    update() {
        // Aiming will be apart of the basic attack. You will swing in that direction, creating an invisible rectangle of attack  
        console.log(this.keyboarder)
        if (this.keyboarder.isDown(Keyboarder.KEYS.MOVELEFT)) { // A
            this.center.x -= 2
        } else if (this.keyboarder.isDown(Keyboarder.KEYS.MOVERIGHT)) { // D
            this.center.x += 2
        } else if (this.keyboarder.isDown(Keyboarder.KEYS.MOVEUP)) { // W
            this.center.y -= 2
        } else if (this.keyboarder.isDown(Keyboarder.KEYS.MOVEDOWN)) { // S
            this.center.y += 2
        }

        // Add later for attack animation 

        // if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
        //     this.attack() // Still needs to be made 
        // }
    }


}