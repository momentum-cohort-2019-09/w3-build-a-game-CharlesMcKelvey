class Attack {
	constructor(game, position, size) {
		this.game = game;
		this.position = { x: position.x, y: position.y };
		this.size = { width: size.width, height: size.height };
		this.color = 'rgba(0, 200, 200, 0.5)';
		this.collide = true;
		this.cooldown = 0;
		this.game.attack = this; // This is adding a property to the game that says this is an attack
	}

	update() {
		// A tick = 1/60 of a second.
		// Attack once per 2 seconds : Every 120 ticks
		// Attack last .5 seconds : 30 Ticks
		this.cooldown++;
		if (cooldown === 30) {
			this.size = { x: 0, y: 0 };
			this.canAttack = false;
		}
		if (cooldown === 120) {
			this.canAttack = true;
		}
	}
}
