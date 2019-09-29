class Player {
	constructor(game, gameSize) {
		this.game = game;
		this.position = { x: gameSize.x / 2, y: gameSize.y / 2 }; // This will be updated as keys are pressed
		this.size = { x: 15, y: 15 }; // Constant dependent upon character type: base character can be 15x15. Warrior 20x20, Mage/Priest base
		this.keyboarder = new Keyboarder();
		this.color = colors.player;

		window.playerPosition = this.position;

		this.collide = true;
		this.alive = true;
	}

	attack(direction) {
		if (this.keyboarder.isDown(Keyboarder.KEYS.ATTACK)) {
			if (direction === 'UP') {
				// Positioning and sizing and then creating and adding the Attack to the bodies
				// Supposed to simulate a spear attack.
				let attackPosition = { x: this.size.x - 8, y: this.size.y - 28 };
				let attackSize = { width: 15, height: 20 };
				let attack = new Attack(this.game, attackPosition, attackSize);
				this.game.addBody(attack);
			} else if (direction === 'RIGHT') {
				let attackPosition = { x: this.size.x + 8, y: this.size.y - 7.5 };
				let attackSize = { x: 20, y: 15 };
				let attack = new Attack(this.game, attackPosition, attackSize);
				this.game.addBody(attack);
			} else if (direction === 'DOWN') {
				let attackPosition = { x: this.size.x - 7.5, y: this.size.y - 8 };
				let attackSize = { x: 15, y: 20 };
				let attack = new Attack(this.game, attackPosition, attackSize);
				this.game.addBody(attack);
			} else if (direction === 'LEFT') {
				let attackPosition = { x: this.size.x - 28, y: this.size.y - 7.5 };
				let attackSize = { x: 20, y: 15 };
				let attack = new Attack(this.game, attackPosition, attackSize);
				this.game.addBody(attack);
			}
		}
	}

	update() {
		let direction = 'DOWN';
		// Aiming will be apart of the basic attack. You will swing in that direction, creating an invisible rectangle of attack
		console.log(this.keyboarder);
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVELEFT)) {
			// A
			this.position.x -= 1.5;
			direction = 'LEFT';
			this.attack(direction);
		}
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVERIGHT)) {
			// D
			this.position.x += 1.5;
			direction = 'RIGHT';
			this.attack(direction);
		}
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVEUP)) {
			// W
			this.position.y -= 1.5;
			direction = 'UP';
			this.attack(direction);
		}
		if (this.keyboarder.isDown(Keyboarder.KEYS.MOVEDOWN)) {
			// S
			this.position.y += 1.5;
			direction = 'DOWN';
			this.attack(direction);
		}
	}
}
