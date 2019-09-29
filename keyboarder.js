class Keyboarder {
	constructor() {
		this.keyState = {};

		window.addEventListener(
			'keydown',
			function(e) {
				this.keyState[e.keyCode] = true;
			}.bind(this)
		);

		window.addEventListener(
			'keyup',
			function(e) {
				this.keyState[e.keyCode] = false;
			}.bind(this)
		);
	}

	isDown(keyCode) {
		return this.keyState[keyCode] === true;
	}

	on(keyCode, callback) {
		window.addEventListener('keydown', function(e) {
			if (e.keyCode === keyCode) {
				callback();
			}
		});
	}
}

Keyboarder.KEYS = {
	AIMLEFT: 37,
	AIMRIGHT: 39,
	AIMUP: 38,
	AIMDOWN: 40, // Aimers
	MOVELEFT: 65,
	MOVERIGHT: 68,
	MOVEUP: 87,
	MOVEDOWN: 83, // Movement
	ATTACK: 32 // SPACE
}; // Attack

function colliding(b1, b2) {
	return !(
		b1 === b2 ||
		b1.position.x + b1.size.x / 2 < b2.position.x - b2.size.x / 2 ||
		b1.position.y + b1.size.y / 2 < b2.position.y - b2.size.y / 2 ||
		b1.position.x - b1.size.x / 2 > b2.position.x + b2.size.x / 2 ||
		b1.position.y - b1.size.y / 2 > b2.position.y + b2.size.y / 2
	);
}
