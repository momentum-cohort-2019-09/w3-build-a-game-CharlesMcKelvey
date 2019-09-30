class Player {
	constructor(game, gameSize) {
		this.game = game;
		this.position = { x: gameSize.x / 2, y: gameSize.y / 2 }; // This will be updated as keys are pressed
		this.size = { x: 20, y: 20 }; // Constant dependent upon character type: base character can be 15x15. Warrior 20x20, Mage/Priest base
		this.keyboarder = new Keyboarder();
		this.color = this.game.randomColors(100);
		this.direction = 'DOWN';
		window.playerPosition = this.position;

		this.collide = true;
		this.alive = true;
	}

	attack(direction) {
		if (!this.game.canAttack) {
			this.game.canAttack = false;
			let attack = new Attack(this.game, this.position, direction);
			this.game.addBody(attack);
			// Should these all be their own separate if statements or else ifs?
		}
	}

	update() {
		// Aiming will be apart of the basic attack. You will swing in that direction, creating an invisible rectangle of attack
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVELEFT)) {
			// A
			this.position.x -= 1.1;
			this.direction = 'LEFT';
			// Load sprites for looking left
			// this.attack(direction);
		}
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVERIGHT)) {
			// D
			this.position.x += 1.1;
			this.direction = 'RIGHT';
			// Load sprites for looking right
			// this.attack(direction);
		}
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVEUP)) {
			// W
			this.position.y -= 1.1;
			this.direction = 'UP';
			// Load sprites for looking up
			// this.attack(direction);
		}
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVEDOWN)) {
			// S
			this.position.y += 1.1;
			this.direction = 'DOWN';
			// Load sprites for looking down
			// this.attack(direction);
		}

		if (this.keyboarder.isDown(Keyboarder.KEYS.ATTACK)) {
			this.attack(this.direction);
			// Attack sprites (Probably 2 frames but one is repeated twice)
		}
		// BOUNDARY BLOCKERS
		if (this.position.x >= this.game.size.x) {
			this.position.x = this.game.size.x;
		}
		if (this.position.y >= this.game.size.y) {
			this.position.y = this.game.size.y;
		}
		if (this.position.x <= 0) {
			this.position.x = 0;
		}
		if (this.position.y <= 0) {
			this.position.y = 0;
		}
	}
}
