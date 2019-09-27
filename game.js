console.log('You are connected! Get to gamin/creatin')

const colors = {
  ground: '#DEDEDE', 
  player: 'black', // Built a piskel gladiator
  baddies: 'red', // Built a bandit with a sword
}

class Game {
  constructor() {
    this.canvas = document.querySelector('#arena') // Oo wee, what up with that????
    this.screen = this.canvas.getContext('2d') // Am I crazy to think this works? 
    this.size = { x: this.canvas.width, y: this.canvas.height } // You want these to play around and do sizing
    this.bodies = [] // You want these cause you and the baddies are equal, but you are better
    this.score = 0
    this.highScore = 0
    this.spawner = .9
    
    // Your seconds in the game
  }

  begin() {
    let player = new Player(this, this.size)
    this.bodies.push(player) 
    this.spawner = 0 // This will increase dependent upon score thresholds met
    console.log('Begin the tick')
    let tick = () => {
      console.log('TickyTickyTicky')
      this.update()
      this.draw(this.screen, this.size)
      requestAnimationFrame(tick)
    }
    tick()

  }
  
  addBody(body) {
    this.bodies.push(body)
  }

  render(screen, body) {
    screen.fillStyle = body.color
    screen.fillRect(body.center.x - body.size.x / 2, // Position at the x
                    body.center.y - body.size.y / 2, // Position at the y
                    body.size.x, body.size.y) // Sizing for x and y 
  }

  // **draw()** draws the game.
  draw(screen, size) {
    screen.clearRect(0, 0, size.x, size.y)
    for (let body of this.bodies) {
      this.render(screen, body)
    }
  }
  
  // **draw()** draws the game.
  update() {
      // Making sure you aren't coliding with anyone. 
      let notCollidingWithAnything = (b1) => {
        return this.bodies.filter(function (b2) { return colliding(b1, b2) }).length === 0
      }
      // Going through and checking each body to make sure they aren't coliding
      this.bodies = this.bodies.filter(notCollidingWithAnything)

      // if (Math.random() > this.spawner) {
      //   this.createBaddie()
      // } // 
      for (let body of this.bodies) {
        body.update() // Grabbing each body and making sure that they are all updated for proper logic
      }  
    }
  
    createBaddie() {
      let randomNum = Math.random()
      let position = {x: 0, y: 0}
      if (randomNum < .25) {
        position.y = this.size.y / 2 // Left Center
      } else if (randomNum < .5) {
        position.x = this.size.x / 2 // Bottom Center 
        position.y = this.size.y
      } else if (randomNum < .75) {
        position.x = this.size.x     // Right Center
        position.y = this.size.y / 2
      } else {
        position.x = this.size.x / 2 // Top Center
      }
      this.addBody(new Baddies(this, position))
    }

  };

// Player must be able to draw itself.  

// Helper Functions Below --------------------------------


// Lets begin
// Starts the game when the browser is loaded 
// window.addEventListener('load', function () {
//   console.log('Gaming')
//   new Game()
// })
