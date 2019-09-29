class Baddies {
	constructor(game, position) {
		this.game = game;
		this.position = { x: position.x, y: position.y };
		this.size = { x: 15, y: 15 };
		this.color = colors.baddies;
		this.speed = 1;
		this.angularVelocity = this.aim(window.playerPosition);

		this.collide = false;
		this.alive = true;
	}

	draw(size) {
		screen.clearRect(0, 0, size.x, size.y);
		for (let body of this.bodies) {
			this.render(screen, body);
		}
	}
	aim(player) {
		let theta = Math.atan2(player.y - this.position.y, player.x - this.position.x);
		let xSpeed = this.speed * Math.cos(theta);
		let ySpeed = this.speed * Math.sin(theta);

		return { x: xSpeed, y: ySpeed };
	}
	update() {
		// Add the colision detection
		this.position = { x: this.position.x + this.angularVelocity.x, y: this.position.y + this.angularVelocity.y };
		this.angularVelocity = this.aim(window.playerPosition);
	}
}
