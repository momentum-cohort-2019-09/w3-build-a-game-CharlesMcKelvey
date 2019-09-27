console.log('You are connected! Get to gamin/creatin')

const colors = {
  ground: '#DEDEDE', 
  player: 'black', // Built a piskel gladiator
  baddies: 'red', // Built a bandit with a sword
}


class Game {
  constructor() {
    console.log('start of game constructor')
    this.canvas = document.getElementById('#arena') // Oo wee, what up with that????
    this.screen = canvas.getContext('2d') // Am I crazy to think this works? 
    this.size = { x: canvas.width, y: canvas.height } // You want these to play around and do sizing
    this.bodies = [] // You want these cause you and the baddies are equal, but you are better
    this.bodies = this.bodies.concat(new Player(this, size))
    
    // Your seconds in the game
    let tick = () => {
      console.log('AHH!')
      this.update()
      this.draw(screen, size)
      requestAnimationFrame(tick)
    }
    tick()
    console.log('end of game constructor')
  }
  
  // **draw()** draws the game.
  draw(screen, size) {
    // Clear away the drawing from the previous tick.
    screen.fillRect(20, 20, size.x, size.y)

    // Draw each body as a rectangle.
    for (let i = 0; i < this.bodies.length; i++) {
      drawRect(screen, this.bodies[i])
    }
  }
  
  addBody(body) {
    this.bodies.push(body)
  }

  // **draw()** draws the game.
  update() {
    // Making sure you aren't coliding with anyone. 
    let notCollidingWithAnything = (b1) => {
      return this.bodies.filter(function (b2) { return colliding(b1, b2) }).length === 0
    }
    // Going through and checking each body to make sure they aren't coliding
    this.bodies = this.bodies.filter(notCollidingWithAnything)

    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update() // Grabbing each body and making sure that they are all updated for proper logic
    }}};

// Player must be able to draw itself.  
class Player {
  constructor(game, gameSize) {
    this.game = game
    this.center = { x: gameSize.x / 2, y: gameSize.y / 2 } // This will be updated as keys are pressed
    this.size = { x: 15, y: 15 } // Constant dependent upon character type: base character can be 15x15. Warrior 20x20, Mage/Priest base
    this.keyboarder = new Keyboarder()
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

    if (this.keyboarder.isDown(this.keyboarder.KEYS.AIMLEFT)) {
      this.aim(left)
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.AIMRIGHT)) {
      this.aim(right)
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.AIMUP)) {
      this.aim(up)
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.AIMDOWN)) {
      this.aim(down)
    }

      // Aiming will be apart of the basic attack. You will swing in that direction, effecting an invisible rectangle  
    if (this.keyboarder.isDown(this.keyboarder.KEYS.MOVELEFT)) {
      this.center.x -= 4 
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.MOVERIGHT)) {
      this.center.x += 4
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.MOVEUP)) {
      this.center.y -= 4
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.MOVEDOWN)) {
      this.center.y += 4
    }

    if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
      this.attack() // Still needs to be made 
    }
  }


}
// Helper Functions
function drawRect(screen, body) {
  screen.fillRect(body.center.x - body.size.x / 2, body.center.y - body.size.y / 2,
    body.size.x, body.size.y)
}



// Lets begin
// Starts the game when the browser is loaded 
window.addEventListener('load', function () {
  new Game()
})