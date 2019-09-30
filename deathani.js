class Death {
	constructor(game, center) {
		this.game = game;
		this.color = colors.dying;
		this.center = center;
		this.position = { x: center.x, y: center.y };
		// Techincally replacing the old body but it's the same size, just different color
		this.size = { x: 15, y: 15 };
		// To time the length of life after becoming Death
		this.count = 0;
	}

	update() {
		this.count++;
		if (count > 60) {
			this.game.bodies = this.game.bodies.filter((elem) => elem !== this);
		}
	}
}
