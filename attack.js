class Attack {
	constructor(game, playerPosition, direction) {
		this.game = game;
		if (direction === 'UP') {
			this.position = { x: playerPosition.x - 8, y: playerPosition.y - 28 };
			this.size = { x: 15, y: 20 };
			console.log(this.size); // So this totally exists, it just isn't being drawn.
		} else if (direction === 'RIGHT') {
			this.position = { x: playerPosition.x + 8, y: playerPosition.y - 7.5 };
			this.size = { x: 20, y: 15 };
		} else if (direction === 'DOWN') {
			this.position = { x: playerPosition.x - 7.5, y: playerPosition.y - 8 };
			this.size = { x: 15, y: 20 };
		} else if (direction === 'LEFT') {
			this.position = { x: playerPosition.x - 28, y: playerPosition.y - 7.5 };
			this.size = { x: 20, y: 15 };
		}
		this.color = 'rgba(0, 200, 200, 0.5)';
		this.collide = true;
		this.cooldown = 0;
		this.game.attack = this; // This is adding a property to the game that says this is an attack
	}

	// This should only exist when you are attacking (for that .5 seconds)
	// which is why the cooldown comes in and works the way it does.
	// The idea is it comes in and immediately dissappears, even if

	update() {
		// A tick = 1/60 of a second.
		// Attack once per 2 seconds : Every 120 ticks
		// Attack last .5 seconds : 30 Ticks
		this.cooldown++;
		if (this.cooldown === 30) {
			clearRect(this.size);
			// Not sure which way would work better. Elimating size or clearing it away
			this.size = { x: 0, y: 0 };
		} else if (this.cooldown === 120) {
			this.game.bodies = this.game.bodies.filter((body) => body !== this);
			this.game.canAttack = true;
			this.cooldown = 0;
		}
	}
}
