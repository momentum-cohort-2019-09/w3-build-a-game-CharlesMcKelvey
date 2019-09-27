class Baddies {
    constructor (game, position) {
        this.game = game
        this.position = {x: position.x, y: position.y}
        this.size = {x: 15, y: 15}
    }

    draw(size) {
        screen.clearRect(0, 0, size.x, size.y)
        for (let body of this.bodies) {
            this.render(screen, body)
        }
    }

    update() {
        
    }
}