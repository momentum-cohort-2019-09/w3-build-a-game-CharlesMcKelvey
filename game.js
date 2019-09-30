console.log('You are connected! Get to gamin/creatin');

const colors = {
	ground: '#DEDEDE',
	player: 'black', // Built a piskel gladiator
	// baddies: 'red', // Built a bandit with a sword
	dying: 'rgba(200, 0, 0, 0.5)'
};

class Game {
	constructor() {
		this.canvas = document.querySelector('#arena'); // Oo wee, what up with that????
		this.screen = this.canvas.getContext('2d'); // Am I crazy to think this works?
		this.size = { x: this.canvas.width, y: this.canvas.height }; // You want these to play around and do sizing
		this.bodies = []; // You want these cause you and the baddies are equal, but you are better
		this.dead = []; // Take the length of this times 2
		this.score = 0;
		this.highScore = 0;
		// this.spawner = 0.9; Not needed because I have a max amount of enemies enabled.
		this.bodiesMax = 5;
		this.canAttack = false;
	}

	randomColors(increase) {
		let red = Math.random() * 100 + increase;
		let green = Math.random() * 100 + increase;
		let blue = Math.random() * 100 + increase;
		let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
		return color;
	}

	begin() {
		// When you begin, you are alive
		let player = new Player(this, this.size);
		this.bodies.push(player);
		this.spawner = 0; // This will increase dependent upon score thresholds met
		console.log('Begin the tick');
		let tick = () => {
			this.update();
			this.draw(this.screen, this.size);
			requestAnimationFrame(tick);
			this.createBaddie();
		};
		tick();
	}

	addBody(body) {
		if (this.bodies.length < this.bodiesMax) {
			this.bodies.push(body);
		}
	}

	render(screen, body) {
		// Actually displaying your bodies
		screen.fillStyle = body.color;
		screen.fillRect(
			body.position.x - body.size.x / 2, // Position at the x
			body.position.y - body.size.y / 2, // Position at the y
			body.size.x,
			body.size.y
		); // Sizing body with x and y
	}

	// **draw()** draws the game.
	draw(screen) {
		// Refresher and creator of characters
		// screen.clearRect(0, 0, size.x, size.y);
		for (let body of this.bodies) {
			this.render(screen, body);
		}
	}

	// **draw()** draws the game.
	update() {
		// START OF ATTACKS
		if (this.canAttack && this.bodies.includes(attack)) {
			for (let body of this.bodies) {
				if (colliding(this.bodies.attack, body)) {
					this.dead.push(body);
					this.score += 2;
				}
			}
			this.bodies = this.bodies.filter((body) => !this.dead.includes(body));
			document.querySelector('.score').textContent = this.score;
			if (this.score > this.highscore) {
				this.highscore = this.score;
				document.querySelector('.highScore').textContent = this.highscore;
			}
		}
		// END OF ATTACKS
		// START OF COLLISION DETECTION
		let notCollidingWithAnything = (b1) => {
			return (
				this.bodies.filter(function(b2) {
					if (b1.collide === false && b2.collide === false) {
						// So the baddies don't kill eachother
						return;
					} else {
						// So the baddies kill me
						return colliding(b1, b2);
					}
				}).length === 0
			);
		};
		// Going through and checking each body to make sure they aren't coliding
		this.bodies = this.bodies.filter(notCollidingWithAnything);
		// END OF COLLISION DETECTION

		// BODY UPDATER
		for (let body of this.bodies) {
			body.update(); // Grabbing each body and making sure that they are all updated for proper logic
		}
	}

	createBaddie() {
		let randomNum = Math.random();
		let position = { x: 0, y: 0 };
		let butWhere = Math.random();
		if (randomNum < 0.25) {
			position.y = this.size.y * butWhere; // Left Center
		} else if (randomNum < 0.5) {
			position.x = this.size.x * butWhere; // Bottom Center
			position.y = this.size.y;
		} else if (randomNum < 0.75) {
			position.x = this.size.x; // Right Center
			position.y = this.size.y * butWhere;
		} else {
			position.x = this.size.x * butWhere; // Top Center
		}
		this.addBody(new Baddies(this, position));
	}
}

// Player must be able to draw itself.

// Helper Functions Below --------------------------------

// Lets begin
// Starts the game when the browser is loaded

window.addEventListener('load', function() {
	console.log('Gaming');
	let game = new Game();
	game.begin();
});
